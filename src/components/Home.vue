<template>
    <div>
        <h2>Trade or View your Protfolio</h2>
        <h6>You may Save & Load your Data</h6>
        <h2>Click on 'End Day' to begin a New Day!</h2>
        <hr>
        <h5>Your Funds: {{ funds | currency }}</h5>
    </div>
</template>
<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>