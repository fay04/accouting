<template>
	<div class="m-error text-center">
		<img src="/static/img/error.png" />
		<div class="cm-btn text_center">
	  		<a class="btn" href="/" >跳转至首页</a>
	  	</div>
	</div>
</template>
<script>
	import router from '.././router'
	export default{
		methods:{
			
		}
	}
</script>
<style lang="scss">
	@import "../../static/css/common.scss";
	.m-error {
		padding-top: 20vh;
		img {
			width:10rem;
			padding-bottom: $flr_20;
		}
	}
</style>