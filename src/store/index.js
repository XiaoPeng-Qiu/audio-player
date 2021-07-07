import Vue from 'vue'
import Vuex from 'vuex'
import musicModules from './modules/music'
// import createLogger from 'vuex/dist/logger'
  
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    music: musicModules
  },
  // plugins: [createLogger()]
})
