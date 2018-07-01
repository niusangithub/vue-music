import * as types from './mutation-types'

const mutations  =  { 
    [types.SET_SINGER](state,singer) {
        state.singer = singer
    },
    [types.SET_PLAYING_STATE](state,falg) {
        state.playing = falg
    },
    [types.SET_FULLSCREEN](state,falg) {
        state.fullScreen = falg
    },
    [types.SET_PLAYLIST](state,singer) {
        state.singer = singer
    },
    [types.SET_SEQUENCELIST](state,arr) {
        state.playlist = arr
    },
    [types.SET_MODE](state,mode) {
        state.mode = mode
    },
    [types.SET_CURRENTINDEX](state,index) {
        state.currentIndex = index
    }
}

export default mutations

