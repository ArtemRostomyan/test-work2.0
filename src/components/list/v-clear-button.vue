<template>
  <div id="v-clear-button">
    <div 
    class="history-arrays"
    v-if="GET_HISTORY_ARRAYS.length">
      <vRemoveLastBtn
        v-if="GET_HISTORY_ARRAYS.length"/>
      <div class="history-arrays__text-box">
        <h2>Последние изменения</h2>
      </div>
      <div class="history-arrays__button-box">

        <vHistoryArrays
          v-for="(item, index) in GET_HISTORY_ARRAYS" 
          @updateValue="updateValue"
          :key="index"
          :item_data="item"
          :index="index"
          />

      </div>

    </div>
    <button
      class="clear-box__button"
      v-if="this.VALUE.length || GET_HISTORY_ARRAYS.length"
      @click="CLEAR_VALUE">Очистить</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vHistoryArrays from './v-history-arrays'
import vRemoveLastBtn from './v-remove-last'

export default{
  name: "v-clear-button",
  components: {
    vHistoryArrays,
    vRemoveLastBtn
  },
  data(){
    return{}
  },
  methods:{
    ...mapActions([
      'CLEAR_VALUE',
      'UPDATE_VALUE_ACTION'
    ]),
    updateValue(value){
      console.log(value)
      this.UPDATE_VALUE_ACTION(value)
      // for(let i = 0; i < value.length; i++){
      //   this.UPDATE_VALUE_ACTION({name: Object.values(value[i])})
      //   console.log(Object.values({name: Object.values(value[i])}))
      // }
    }
  },
  computed: {
    ...mapGetters([
      'GET_HISTORY_ARRAYS',
      'VALUE'
    ])
  }
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
    transition: 0.25s;
    text-transform: uppercase;
    &:hover{
      background-color: rgb(148, 4, 4);
    }
  }
}
.history-arrays{
  position: absolute;
  width: 100%;
  bottom: 52px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  &__text-box{
    @media(max-height: 655px){
      display: none;
    }
  }
  &__button-box{
    display: flex;
    justify-content: center;
  }
}
</style>
