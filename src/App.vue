<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <vMainWrapper/>
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'


export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style >
#app{
  text-align: center;
}
body{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
