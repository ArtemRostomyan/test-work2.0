<template>
  <div id="v-main-wrapper">
    <vMultiSelect/>
    <vList/>
    <vClearButton
      class="clear-box"
      v-if="this.VALUE.length"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import vMultiSelect from './list/v-multiselect'
import vList from './list/v-list'
import vClearButton from './list/v-clear-button'

export default{
  name: "v-main-wrapper",
  components: {
    vMultiSelect,
    vList,
    vClearButton
  },
  data(){
    return{}
  },
  methods:{
  },
  computed: {
    ...mapGetters([
      'VALUE'
    ])
  }
}
</script>

<style lang="scss">
.clear-box{
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;  
}
</style>
