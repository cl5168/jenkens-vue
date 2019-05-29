<template>
	<div class="header">
		<el-row class="header-box">
				<el-col :span="5" class="height"></el-col>
				<el-col :span="14">
					<div class="header-tit">  
						  xxx
					</div>
				</el-col>
				<el-col :span="5" class="height"></el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.header /deep/ .header-box{
	width: 100%;
	height: 200px;
	background: url(../../assets/images/header-bg.png) no-repeat left top;
	position: relative;
	.height{
		height: 10px;
	}
	.header-tit{
		color: #fff;
	}
}
</style>
