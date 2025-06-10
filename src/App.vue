<script>
import HomePage from './views/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
