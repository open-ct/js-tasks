import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

 

export default new Vuex.Store({

  state:{

    answer:{
      radio1:-1,radio2:-1,
      text1:'',
      radio3:-1,text2:'',
      text3:'',
      radio4:-1,text4:'',
      radio5:-1,text5:'',

    }

  },
})