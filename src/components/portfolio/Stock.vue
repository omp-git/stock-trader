<template>
    <div class="col-sm-6 col-lg-4">
        <div class="card text-white mb-3 bg-success">
            <div class="card-header">{{ stock.name }} <small class="float-right">{{ stock.price | currency }} | Qu : {{ stock.quantity }}</small></div>
            <div class="card-body bg-light text-secondary">
                <div class="float-left">
                    <input type="number" :class="['form-control', {'is-invalid': insufficientQuantity}]" placeholder="Quantity" min="0" max="1000"
                        v-model.number="quantity" @input="calcSum">
                </div>
                <div class="float-right">
                    <button type="button" class="btn btn-danger btn-sm buy-btn" @click="sellStock"
                    :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">
                    {{ insufficientQuantity ? 'Not Enough Stocks' : 'Sell'}} <span class="badge badge-dark badge-pill" v-show="sum > 0">{{ sum | currency}}</span></button> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0,
            sum: 0
        }
    },
    methods: {
        ...mapActions({
            sell: 'sellStock'
        }),
        calcSum() {
            this.sum = this.quantity * this.stock.price;
        },
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: parseInt(this.quantity)
            }            
            this.sell(order);
            this.quantity = 0;
            this.sum = 0;
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity;
        }
    }
}
</script>