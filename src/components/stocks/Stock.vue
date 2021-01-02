<template>
    <div class="col-sm-6 col-lg-4">
        <div class="card text-white mb-3 bg-info">
            <div class="card-header">{{ stock.name }} <small class="float-right">{{ stock.price | currency }}</small></div>
            <div class="card-body bg-light text-secondary">
                <div class="float-left">
                    <input type="number" :class="['form-control',{'is-invalid': insufficientFunds}]" placeholder="Quantity" min="0" max="1000"
                        v-model.number="quantity" @input="calcSum">
                </div>
                <div class="float-right">
                    <button type="button" class="btn btn-info btn-sm buy-btn" 
                    @click="buyStock" :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)">
                    {{ insufficientFunds ? "Insufficient Funds" : "Buy" }} <span class="badge badge-warning badge-pill" v-show="sum > 0">{{ sum | currency}}</span>
                </button> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0,
            sum: 0
        }
    },
    methods: {
        calcSum() {
            this.sum = this.quantity * this.stock.price;
        },
        buyStock() {
            if(this.quantity > 0) {
                const order = {
                    stockId: this.stock.id,
                    quantity: parseInt(this.quantity),
                    stockPrice: this.stock.price
                };
                this.$store.dispatch('buyStock', order);
            }
            this.quantity = 0;
            this.sum = 0;
        }
    }, 
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    } 
}
</script>