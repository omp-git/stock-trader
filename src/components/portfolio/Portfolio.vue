<template>
    <div class="row" v-if="stocks.length">
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
    <div class="row" v-else>
        <div class="col-12">
            <h2 class="text-success text-center mt-2">You dont have any Stocks !</h2>
        </div>
    </div>
</template>
<script>
import Stock from './Stock'
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    components: {
        'app-stock': Stock
    }
}
</script>