
import { Vue } from '../../js/base'
import HeaderNav from '../../components/common/header.vue'
import Index from './index.vue'

require('scss/home/home.scss')

var homeVue = new Vue({
    el: '#home',
    template: '<div><header-nav></header-nav> <div class="container"><index></index></div></div> ',
    components: {
        'header-nav': HeaderNav,
        'index': Index
    }
})