<template>
    <div class="row">
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock'
export default {
    components: {
        'app-stock': Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>