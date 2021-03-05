<template>
  <div id="v-remove-last">
    <button
      class="button-remove"
      @click="REMOVE_LAST">Отменить последнее действие</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
  name: "v-remove-last",
  data(){
    return{}
  },
  methods:{
    ...mapActions([
      'REMOVE_LAST'
    ])
  }
}
</script>

<style lang="scss">
.button-remove{
  width: 50%;
  background-color: rgb(255, 230, 0);
  color: #000;
  font-weight: 600;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
