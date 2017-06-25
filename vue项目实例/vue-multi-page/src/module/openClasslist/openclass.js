import { Vue } from '../../js/base'
import HeaderNav from '../../components/common/header.vue'
import Open from './openclass.vue'

require('scss/openclass/openclass.scss')

var openVue = new Vue({
    el: '#openclass',
    template: '<div><header-nav></header-nav><div class="container"><open></open></div></div>',
    components: {
        'header-nav': HeaderNav,
        'open': Open
    }
})