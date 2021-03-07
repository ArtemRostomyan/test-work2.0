import vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'

Vue.use(vuex)

let store = new vuex.Store({
   state: {
      data: [],
      value: [],
      historyArrays: [],
      value_text: [],
      error_fetch: false
   },
   mutations,
   actions,
   getters
});

export default store