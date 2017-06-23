const getters = {
  movingData: state => {
    state.movingData.subjects.map(v => v.rating.average = v.rating.average/2)
    return state.movingData
  },
  loadingMoving: state => state.loadingMoving,
  upcoming: state => state.upcoming,
  city: state => state.city,
  ranking250: state => {
    return state.ranking250
  },
  id: state => state.id,
  start: state => state.start,
  movieDetail: state => {
    state.movieDetail.rating.average = state.movieDetail.rating.average/2
    return state.movieDetail
  },
  searchText: state => state.searchText,
  searchList: state => state.searchList,
  searchLoading: state => state.searchLoading,
  pageload: state => state.pageload,
  movieComment: state => state.movieComment
}
export default getters
