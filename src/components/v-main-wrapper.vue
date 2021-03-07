<template>
  <div id="v-main-wrapper">
    <vMultiSelect/>
    <vList/>
    <vClearButton
      class="clear-box"/>
    <vError
      v-if="get_error"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import vMultiSelect from './list/v-multiselect'
import vList from './list/v-list'
import vClearButton from './list/v-clear-button'
import vError from './list/error-handling/v-error'

export default{
  name: "v-main-wrapper",
  components: {
    vMultiSelect,
    vList,
    vClearButton,
    vError
  },
  data(){
    return{}
  },
  methods:{
  },
  computed: {
    ...mapGetters([
      'GET_ERROR'
    ]),
    get_error(){
      if(this.GET_ERROR == true){
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.clear-box{
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;  
}
</style>
