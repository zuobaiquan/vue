<template>
  <div class="search-tag">
    <a class="search-tag-img">
      <img class="search-tag-img movieImg" :src="subject.images.medium">
    </a>
    <div class="search-brief">
      <p class="title">{{subject.title}}/<span>{{subject.original_title}}</span></p>
      <p class="disc">
        {{subject.year}}年
        <span v-for="director in subject.directors">
          /{{director.name}}
        </span>
        <span v-for="cast in subject.casts">
          /{{cast.name}}
        </span>
      </p>
      <p class="rate">
        <el-rate
          v-model="subject.rating.average"
          disabled
          text-color="#ff9900">
        </el-rate>
        <span class="rate-value">{{subject.rating.average}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      subject: {
        type: Object
      }
    },
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  @import '../../../style/color.less';
  @import "../../../style/base";
  .search-tag{
    padding: 20px;
    border-top: 1px dashed @line;
    .search-img{
      width: 100px;
      height: 140px;
      overflow: hidden;
      display: inline-block;
      .search-tag-img{
        width: 100px;
      }
    }
    .search-brief{
      display: inline-block;
      vertical-align: top;
      margin-left: 40px;
      p{
        margin-bottom: 20px;
      }
      .title{
        color: #666699;
        font-size: 14px;
        span{
          font-size: 12px;
        }
      }
      .disc{
        width: 500px;
      }
      .rate{
        .el-rate{
          display: inline-block;
          .el-rate__item{
            transform: scale(0.8);
            display: inline-block;
            vertical-align: middle;
          }
          .el-rate__icon{
            font-size: 12px;
            margin-right: 0px;
          }
        }
        .rate-value{
          color: #ff9900
        }
      }
    }
  }
</style>
