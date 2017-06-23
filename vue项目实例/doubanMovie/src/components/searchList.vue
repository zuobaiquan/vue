<template>
  <div class="search-list" v-loading="searchLoading">
    <searchTag v-for="(subject, index) in searchList.subjects" :subject="subject" :key='index'></searchTag>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import searchTag from './common/searchTag'
  export default{
    data () {
      return {
      }
    },
    mounted () {
      this.$store.dispatch('getSearchList')
    },
    components: {
      searchTag
    },
    mounted() {
      if (this.searchText === "") {
        let searchText = this.$route.query.searchText
        this.$store.commit('SEARCH_TEXT', {searchText: searchText})
        this.$store.dispatch('getSearchList')
      }
    },
    computed: {
      ...mapGetters([
        'searchText',
        'searchList',
        'searchLoading'
      ])
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .search-list{
    width: 950px;
    min-height: 500px;
    margin: 30px auto;
  }
</style>
