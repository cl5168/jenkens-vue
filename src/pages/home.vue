<template>
	<div class="">
		<header-common></header-common>
		<el-row class="nav-box">
				<el-col :span="5" class="height"></el-col>
				<el-col :span="14">
							<el-menu
							:default-active="activeIndex2"
							class="el-menu-demo"
							mode="horizontal"
							@select="handleSelect"
							background-color="#545c64"
							text-color="#fff"
							active-text-color="#ffd04b">
							<el-menu-item index="1">首页</el-menu-item>
							<el-menu-item index="2">管理</el-menu-item>
							<el-menu-item index="3">消息中心</el-menu-item>
							<el-menu-item index="4">订单管理</el-menu-item>
						</el-menu>
				</el-col>
				<el-col :span="5"  class="height"></el-col>
		</el-row>
		<el-row>
				<el-col :span="5" class="height"></el-col>
				<el-col :span="14">
						<ul class="">
							 <li v-for="(item, index) in listNew">
								<span class="num">{{index+1}}</span>
								<span class="text textOverflow">{{item.title}}</span>
								<span class="date textOverflow">{{item.updatedate}}</span>
							</li>
						</ul>
				</el-col>
				<el-col :span="5"  class="height"></el-col>
		</el-row>
		
		
		<el-input v-model="inpContent"></el-input>
		<el-button type="primary" @click="getValueFun">获取数据</el-button>
		<el-button type="primary" @click="setValueFun">添加数据</el-button>
	</div>
</template>

<script>
	import {getValue,setValue} from '@/api/account'
	import header from '@/components/common/Header'
export default {
  name: 'blog',
  data() {
    return {
	  activeIndex2: '1',
      inpContent: '',
	  listNew:[]
    }
  },
  components:{
  	  'header-common':header
  },
  created(){
	  this.getNewList()
  },
  methods: {
	getNewList(){
		this.listNew = [
            {
                "id":"cfa7ad8e782d4e7391c5eb8e18e22eea",
                "title":"市经信委召开商业价值信用贷款工作座谈会",
                "clicks":0,
                "createdate":"2019-05-08",
                "createBy":"59a0451a8d4f4a37b10f1acc7daf67bb",
                "updatedate":"2019-05-08",
                "updateBy":"59a0451a8d4f4a37b10f1acc7daf67bb",
                "extend1":null,
                "extend2":null,
                "extend3":null,
                "type":"1",
                "status":"1",
                "litimg":"group1/M00/01/B8/wKgKLlzShPyALZ3gAAuF9wSSKPQ081.jpg",
                "content":null,
                "domain":"http://testsyjz.cqsme.cn/",
                "headline":"1"
            },
            {
                "id":"f23a117e306d46ada43563193754ca93",
                "title":"江北区组织召开中小企业商业价值信用贷款暨2019年第一批市工业和信息化专项资金项目申报政策宣贯会",
                "clicks":0,
                "createdate":"2019-04-24",
                "createBy":"59a0451a8d4f4a37b10f1acc7daf67bb",
                "updatedate":"2019-04-24",
                "updateBy":"59a0451a8d4f4a37b10f1acc7daf67bb",
                "extend1":null,
                "extend2":null,
                "extend3":null,
                "type":"2",
                "status":"1",
                "litimg":"group1/M00/01/92/wKgKLlzADjOAANwwAAWswLFFMNc289.png",
                "content":null,
                "domain":"http://testsyjz.cqsme.cn/",
                "headline":"1"
            },
            {
                "id":"59a6b265076241ab855d343f09f8227b",
                "title":"市经信委召开全市中小微企业转贷应急工作座谈会",
                "clicks":0,
                "createdate":"2019-04-23",
                "createBy":"59a0451a8d4f4a37b10f1acc7daf67bb",
                "updatedate":"2019-04-23",
                "updateBy":"59a0451a8d4f4a37b10f1acc7daf67bb",
                "extend1":null,
                "extend2":null,
                "extend3":null,
                "type":"1",
                "status":"1",
                "litimg":"group1/M00/01/8D/wKgKLly-vHqAFZP2AAxLGWd2Awo782.jpg",
                "content":null,
                "domain":"http://testsyjz.cqsme.cn/",
                "headline":"1"
            },
            {
                "id":"9a52885b4a844917a1a25b7cc6f63e74",
                "title":"两江新区召开中小企业商业价值信用贷款政策宣贯会",
                "clicks":0,
                "createdate":"2019-04-22",
                "createBy":"59a0451a8d4f4a37b10f1acc7daf67bb",
                "updatedate":"2019-04-22",
                "updateBy":"59a0451a8d4f4a37b10f1acc7daf67bb",
                "extend1":null,
                "extend2":null,
                "extend3":null,
                "type":"2",
                "status":"1",
                "litimg":"group1/M00/01/86/wKgKLly9RGWAaVP4AAvj3pL4og4972.png",
                "content":null,
                "domain":"http://testsyjz.cqsme.cn/",
                "headline":"1"
            },
            {
                "id":"ed8100221fac45d69d86ad6de549410f",
                "title":"融资1000亿以上！重庆民营企业融资创新专项行动启动",
                "clicks":0,
                "createdate":"2019-03-28",
                "createBy":"59a0451a8d4f4a37b10f1acc7daf67bb",
                "updatedate":"2019-04-22",
                "updateBy":"59a0451a8d4f4a37b10f1acc7daf67bb",
                "extend1":null,
                "extend2":null,
                "extend3":null,
                "type":"1",
                "status":"1",
                "litimg":"group1/M00/01/37/wKgKLlyccwWAClNvAAWd0sstL1I994.jpg",
                "content":null,
                "domain":"http://testsyjz.cqsme.cn/",
                "headline":"1"
            },
            {
                "id":"abd4e5215d7f4b3e84259a3c459880d8",
                "title":"重庆助力小微企业贷款 8家银行签约",
                "clicks":0,
                "createdate":"2019-01-07",
                "createBy":"67e0af04a9b04e9a8d208e1f41954dbd",
                "updatedate":"2019-04-22",
                "updateBy":"59a0451a8d4f4a37b10f1acc7daf67bb",
                "extend1":null,
                "extend2":null,
                "extend3":null,
                "type":"1",
                "status":"1",
                "litimg":"group1/M00/00/62/wKgKx1xAO5aAVfZrAA52D2VsK04167.jpg",
                "content":null,
                "domain":"http://testsyjz.cqsme.cn/",
                "headline":"1"
            },
            {
                "id":"1d45fdd71c6843eb9e17180058c2d749",
                "title":"重庆中小企业无需抵押 靠商业价值可获最高300万元贷款",
                "clicks":0,
                "createdate":"2019-01-07",
                "createBy":"67e0af04a9b04e9a8d208e1f41954dbd",
                "updatedate":"2019-04-22",
                "updateBy":"67e0af04a9b04e9a8d208e1f41954dbd",
                "extend1":null,
                "extend2":null,
                "extend3":null,
                "type":"1",
                "status":"1",
                "litimg":"group1/M00/00/79/wKgKLlxP9s2AG9w5AA8aeHm_3eE560.jpg",
                "content":null,
                "domain":"http://testsyjz.cqsme.cn/",
                "headline":"1"
            }
        ]
	},
		handleSelect(key, keyPath) {
		console.log(key, keyPath);
	},
	  getValueFun(){
		let data =  {id: 2}
		getValue(data).then((res)=>{
		  console.log('res', res);
		  this.inpContent = res[0].name;
		}) 
	  },
	  setValueFun(){
		  let data = {
			  id:1,
			  name: this.inpContent
		  }
		  setValue(data).then((res)=>{
			  console.log('res', res);
		  })
	  }
  }
}
</script>
<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>