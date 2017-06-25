import types from './mutations_types'
export default{
  save_songList(state, songList) {
    state.songList = songList
  },
  changeLinkIndex(state, index) {
    state.linkIndex = index
  },
  changeTagIndex(state, index) {
    state.tagLink = index
  },
  save_singer(state, singer) {
    state.singer = singer
  }
}
