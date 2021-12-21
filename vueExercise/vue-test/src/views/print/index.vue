<template>
	<div>
	<div class="mask"></div>
  	<div class="billPrinter">
	  <div class="billPrinter_nice_it">开单操作</div>
	  <div ref="printBills" id="bills"  >
	    <div class="headerContainer">
	      <div class="billHeader" >
	        <div class="topDetail">科润足浴</div>
	        <div class="topDetail">结帐单</div>
	      </div>
	      <div class="topAb" >
	        <div class="topDetail">房间号:V8001</div>
	        <div class="topDetail">帐单号:B21121900001</div>
	        <div class="topDetail">结帐时间:2021-12-19 15:01:01</div>
	        <div class="topDetail">收银员:陆正</div>
	      </div>
	    </div>

	    <div class="Detail" >
	      <div class="print-container">
	      <ul class="print-table">
	        <li>消费项目</li>
	        <li>数量</li>
	        <li>单价</li>
	        <li>小计</li>
	      </ul>
	        <ul class="print-table" v-for="(item,index) in tableData_two" :key="index">
	          <li>{{item.name}}</li>
	          <li>{{item.sex}}</li>
	          <li>{{item.age}}</li>
	          <li>{{item.address}}</li>
	        </ul>
	      </div>
	    </div>
	    <div class="justfooter">
	      <div class="billFooter">
	        <div class="footDetail">应收金额:80.00</div>
	        <div class="footDetail">实收金额:120.00</div>
	      </div>
	      <div class="billFooter">
	        <div class="footDetail">实收金额:80.00</div>
	        <div class="footDetail">现金:120.00</div>
	      </div>
	    </div>
	  </div>
	  <span class="print-btn" @click="printTap">打印</span>
  </div>
</div>

</template>

<script>
import Vue from 'vue'
import print from './print.js'
Vue.use(print)
export default {
  data(){
    return{

      currentRow: null,
      tableData_two: [
        { id: 10001, name: '现金(00)', role: 'Develop', sex: '0', age: '0.00', address: '0.00' },
        { id: 10001, name: '现金(00)', role: 'Develop', sex: '0', age: '0.00', address: '0.00' },
        { id: 10001, name: '现金(00)', role: 'Develop', sex: '0', age: '0.00', address: '0.00' },
        { id: 10001, name: '现金(00)', role: 'Develop', sex: '0', age: '0.00', address: '0.00' },
      ],
      printObj:{
        id: "bills",
        popTitle: 'good print',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      },
      checked: true
    }
  },
  directives: {
    print
  },
  methods:{
    printTap(){
        this.$print(this.$refs.printBills)
    }
  }

}
</script>

<style lang="scss">
.mask{
	position:fixed;
	left:0;
	top:0;
	right:0;
	bottom:0;
	background:rgba(0,0,0,0.6);
	z-index:9;
}
.billPrinter{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width:300px;
  z-index: 10;
  padding:20px 0;
  background:#fff;
}

.billPrinter_nice_it{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}

.el-table td, .el-table th{
  padding: 5px 0 !important;
}
.print-container{
  width: 100%;
  display: block;
}
@page { margin: 0 !important;padding:0;box-shadow: none;}
@page *{margin: 0 !important;padding:0 !important;}

@page  :right{
  margin:10px;padding:0;
}

@page  :left{
  margin:10px;padding:0;
}
@page size {
  
}
.print-btn{
display:inline-block;
width:50px;
height:30px;
line-height:30px;
text-align:center;
border:1px solid #e5e5e5;
border-radius:5px;
}
.print-table{
  display: flex;
  padding:0;
  border-bottom:1px solid red;
  
}
.print-table li{
  list-style: none;
  flex:1;
  height: 28px;
  line-height: 28px;
  font-size:14px;
  white-space: nowrap;
  box-sizing: border-box;
}
.print-table li:first-child{
  flex:1.7;
}
</style>

