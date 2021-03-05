<template>
  <div id="app">
    <img id="app__img" alt="Vue logo" src="./assets/logo.png">
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

<style lang="scss">
#app{
  text-align: center;
  &__img{
    width: 120px;
  }
}
body{
  font-family: Arial, Helvetica, sans-serif;
}
button{
  cursor: pointer;
}
</style>
