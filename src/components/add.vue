<template>
	<div class="display_flex min-height">
		<div class="flex_1 m_add">
		<!--	<div name="" placeholder="...编辑后保存" contenteditable="true" class="textarea" >{{noteItem.content}}</div>
			<input type="text" v-model="noteItem.content" />-->
			<textarea class="textarea" placeholder="...编辑后保存" v-model="noteItem.content" id="textarea"></textarea>
		</div>
		<div class="cm-btn text_center">
			<a class="btn" href="javascript:void(0)" @click="saveOrUpdateNote">好</a>
		</div>
	</div>
</template>

<script>
	import router from '.././router';
	import Vue from 'vue';
//	import notelist from 'notelist'
//	import { bus } from '../bus.js'
	// ...
//	bus.$on('tip', function(id) {
//			console.log(this)
//	})
	export default {
		data() {
			return {
				noteItem: {
					
				}
			}
		},
		created(){
		 	var self = this;
		    this.$parent.Bus.$on('id', function(id){
		    	self.$set(self.noteItem, 'content', id);
		    })
		  },
		methods: {
			saveOrUpdateNote: function() {
				//					this.$http.post("static/json/notelist.json").then(function(data){
				//				    	this.allData = data.data.allData;
				//				    	this.dialogShow = false
				//				    	
				//				    },function(error){
				//				    	console.log(error)
				//				    });
									router.push("/");
				//					保存数据后跳转到主页
			},
		}
	}
</script>

<style lang="scss">
	@import "../../static/css/common.scss";
	.m_add {
		background: $color_white;
		padding: $flr_20;
		.textarea {
			border: none;
			outline: none;
			width: 100%;
			min-height: 50vh;
			resize:none;
			&:empty:after {
				content: attr(placeholder);
				color: $color_56;
			}
		}
	}
</style>