import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// vuex的调试工具
const debug = process.env.NODE_ENV !== 'production'
// 通过 mutations修改state的时候 打印日志
import createLogger from 'vuex/dist/logger'
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})