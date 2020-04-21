<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    {{env}}
    {{api}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data() {
    return {
      env : process.env.ENV_CONFIG,
      api : process.env.API_ROOT
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
