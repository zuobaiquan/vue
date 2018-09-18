// 播放器vueX的数据设计
const playMode = {
  sequence: 0,
  loop: 1,
  random: 2
}
// 定义state初始化状态
const state = {
  singer: {},
  playing: false,
  fullscreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  backImage: ''
}
// 定义getters
const getters = {
  singer: (state) => {
    return state.singer
  },
  playing: (state) => {
    return state.playing
  },
  fullscreen: (state) => {
    return state.fullscreen
  },
  playlist: (state) => {
    return state.playlist
  },
  sequenceList: (state) => {
    return state.sequenceList
  },
  mode: (state) => {
    return state.mode
  },
  currentIndex: (state) => {
    return state.currentIndex
  },
  currentSong: (state) => {
    return state.playlist[state.currentIndex] || {}
  },
  backImage: (state) => {
    return state.backImage
  }
}
// 定义mutations，对state修改的逻辑
const mutations = {
  setSinger (state, singer) {
    state.singer = singer
  },
  setPlaying (state, flag) {
    state.playing = flag
  },
  setfullScreen (state, flag) {
    state.fullscreen = flag
  },
  setPlaylist (state, list) {
    state.playlist = list
  },
  setSequenceList (state, list) {
    state.sequenceList = list
  },
  setPlayMode (state, mode) {
    state.mode = mode
  },
  setCurrentIndex (state, index) {
    state.currentIndex = index
  },
  setBackImage (state, backImage) {
    state.backImage = backImage
  }
}

// 定义actions
const actions = {
  // 选中一个音乐之后触发的变化
  selectPlay ({commit, state}, {list, index, backImage}) {
    commit('setfullScreen', true)
    commit('setPlaying', true)
    commit('setPlaylist', list)
    commit('setSequenceList', list)
    commit('setCurrentIndex', index)
    commit('setBackImage', backImage)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
