<template>
  <div class="container">
    <app-header></app-header>
    <div class="row mt-3">
      <div class="col-12">
        <transition mode="out-in" name="slide">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    AppHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style lang="scss">
  .slide-enter-active {
    animation: slide-in 200ms forwards;
  }
  .slide-leave-active {
    animation: slide-out 100ms forwards;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes silde-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
