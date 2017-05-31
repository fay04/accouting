<template>
	<div>
			<!--笔记列表-->
		  	<div class="m-note_item m-index_frame " v-for="'(item,index) in routerData"  :key="item.id" @click="goAdd(item)">
		  		
		  		<p class="til">{{item.til}}</p>
		  		<time>{{item.time}}</time>
		  		<i class="icon-z-list iconfont"></i>
		  		
		  	</div>
		  	<!--<router-view v-bind:router-nesting='routerData'></router-view>-->
	</div>
</template>

<script >
	import router from '.././router';
//	import { bus } from '../bus.js'
	// ...
	
	
	export default{
		props:["routerData"],
		methods:{
			goAdd: function(item){
				console.log(this.$parent)
					this.$parent.Bus.$emit('id', 123)
					router.push({
						path:"/add/"
					})
			}
		}
	}
</script>

<style>
</style>