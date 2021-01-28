<template>
  <div id="app">
    <div class="stage" v-loading="loading"></div>
    <p v-if="jiereal">test</p>
    <p v-for="a of 3">
      test
    </p>
    <p v-text="vText"></p>
  </div>
</template>

<script>
  import loadingDirective from './directives/loading';
  export default {
    name: 'App',
    directives: {
      loadingDirective
    },
    data() {
      return {
        loading: false,
        jiereal: false
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    .stage {
      width: 200px;
      height: 200px;
      background: gray;
      position: fixed;
      left: 50%;
      top: 50%;
    }
  }
</style>
