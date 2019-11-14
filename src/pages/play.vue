<template>
  <div>
    <div id="game" ref="game"/>
    <router-link to="/" class="back"> Back </router-link>
  </div>
</template>

<script>
  import game from '../game';

  export default {
    mounted() {
      game(this.$refs.game);
    }
  };
</script>

<style lang="scss" scoped>
  #game {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .back {
    position: absolute;
    left: 20px;
    top: 20px;
  }
</style>
