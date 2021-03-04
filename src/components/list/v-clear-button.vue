<template>
  <div id="v-clear-button">
    <button
      class="clear-box__button"
      @click="CLEAR_VALUE">Очистить</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
  name: "v-clear-button",
  data(){
    return{}
  },
  methods:{
    ...mapActions([
      'CLEAR_VALUE'
    ])
  },

}
</script>

<style lang="scss">
.clear-box{
  &__button{
    background-color: red;
    font-size: 20px;
    width: 100%;
    height: 50px;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 0.25s;
    text-transform: uppercase;
    &:hover{
      background-color: rgb(148, 4, 4);
    }
  }
}
</style>
