<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" :to="{name:'home'}">Stock Trade</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav mr-auto">
                <router-link tag="li" :to="{name:'portfolio'}" activeClass="active">
                    <a class="nav-link">Portfolio</a>
                </router-link>

                <router-link tag="li" :to="{name:'stocks'}" activeClass="active" class="nav-item">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
            <ul class="nav navbar-nav dropdown navbar-right">
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="endDay">End Day</a>
                </li>
                <li class="nav-item drop-down" @click="isDrop = !isDrop">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="(bb)">
                    Save & Load
                    </a>
                    <ul class="dropdown-menu" :class="{'show': isDrop}" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#" @click="saveData">Save Data</a></li>
                        <li><a class="dropdown-item" href="#" @click="loadData">Load Data</a></li>
                    </ul>
                </li>
            </ul>
            <strong class="nvabar-text navbar-right">Funds: {{ funds | currency }}</strong>
        </div>
    </nav>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data() {
        return {
            isDrop: false
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
        }),
        endDay() {
            this.randomizeStocks();
        },
        saveData() {
            const data = {
                funds : this.$store.getters.funds,
                portfolioStocks : this.$store.getters.stockPortfolio,
                stocks : this.$store.getters.stocks
            }
            this.$http.put('myData.json', data);   
            
        },
        loadData() {
            this.fetchData();
        }
    },  
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>