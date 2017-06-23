import * as types from './types'
const mutations = {
  [types.MOVING_LIST] (state, data){
    state.movingData = data
  },
  [types.MOVING_LOADING] (state, data){
    state.loadingMoving = data.loading
  },
  [types.MOVING_COMING] (state, data){
    if (state.upcoming.subjects && state.upcoming.subjects.length) {
      state.upcoming.subjects = state.upcoming.subjects.concat(data.subjects);
    } else {
      state.upcoming = data
    }
  },
  [types.MOVIE_CITY] (state, data) {
    state.city = data.city
  },
  [types.MOVIE_TOP_250] (state, data) {
    state.ranking250 = data
  },
  [types.PAGE_START] (state, data) {
    state.start = data.start
  },
  [types.MOVING_ID] (state, data) {
    state.id = data.id
  },
  [types.MOVING_DETAIL] (state, data) {
    state.movieDetail = data
  },
  [types.SEARCH_TEXT] (state, data) {
    state.searchText = data.searchText
  },
  [types.SEARCH_LIST] (state, data) {
    state.searchList = data
  },
  [types.SEARCH_LOADING] (state, data) {
    state.searchLoading = data.loading
  },
  [types.PAGE_LOAD] (state, data) {
    state.pageload = data.pageload
  },
  [types.MOVIE_COMMENT] (state, data) {
    state.movieComment = data
  }
}
export default mutations
