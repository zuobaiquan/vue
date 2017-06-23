import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  movingData: {
    subjects: []
  },
  loadingMoving: true,
  upcoming: {
    start: 0,
  },
  pageload: false,
  city: '北京',
  ranking250: {},
  start: 0,   //top 250分页起点
  id:'',
  movieDetail: {
    rating: {},
    images: {}
  },
  searchText: '',
  searchList: {},
  searchLoading: true,
  movieComment: {}
}

export default {
  state,
  getters,
  actions,
  mutations
}
