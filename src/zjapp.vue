<template>
	<div class="display_flex min-height">
		<div class="flex_1">
		  	<!--顶部搜索框-->
		  	<div class="m-index_frame" v-show="showSearch">
		  		<input type="text" placeholder="输入搜索内容..." v-on:change="refreshNoteList"/>
		  	</div>
		  	<!--笔记列表-->
		  	<notelist></notelist>
		  	<router-view v-bind:router-data="allData" ></router-view>
	  	</div>
	  	<footer class=" m-tab t_line" v-show="showTab">
	  		<div class="d_f_c text_center">
	  			<router-link to="/" class="flex_1">
		  			<div  v-bind:class="{ active: isTabActive }" class="flex_1 tab ">
		  				<i class="iconfont icon-liebiao"></i>
		  				<p>列表</p>
		  			</div>
	  			</router-link>
	  			<router-link to="/about"  class="flex_1">
	  				<div  v-bind:class="{ active: !isTabActive }" class="flex_1 tab">
		  				<i class="iconfont icon-user"></i>
		  				<p>我的</p>
		  			</div>
	  			</router-link>
	  		</div>
	  	</footer>
	  	<div class="m-icon" v-show="showSearch">
	  		<i class="iconfont icon-refresh" v-on:click="refresh"></i>
	  		<router-link to="/add"><i class="iconfont icon-add"></i></router-link>
	  	</div>
	  	<toastdialog v-if="dialogShow"></toastdialog>
  	</div>
</template>
<script>
	import router from './router';
	import notelist from './components/notelist.vue';
	import toastdialog from './components/toastDialog.vue';
	import about from './components/about.vue'
	import Vue from 'vue'

	export default{
		data(){ 
			return{
				allData:[],
				dialogShow:false,
				showSearch:true,
				showTab:true,
				isTabActive: true,
				 Bus: new Vue()
			}
		},
  		components: { notelist ,toastdialog,about},
		created(){
			this.routePath();
		},
		watch:{
			"$route"(to){
				this.routePath();
			}
		},
		methods:{
			refresh: function(){
				this.load();
			},
			load:function(){
				this.dialogShow = true
				 this.$http.get("static/json/notelist.json").then(function(data){
			    	this.allData = data.data.allData;
			    	global.COURSES = this.allData
			    	this.dialogShow = false
			    },function(error){
			    	console.log(error)
			    });
			},
			refreshNoteList: function(){
				console.log("CHANGE")
			},
			routePath: function(){
				if(this.$route.fullPath=="/" ){
					this.load();
					this.showSearch = true
					this.showTab = true;
					this.isTabActive = true
				}else if( this.$route.fullPath == "/about"){
					this.showSearch = false;
					this.showTab = true;
					this.isTabActive = false
				}else if(this.$route.fullPath.indexOf("/add") > -1){
					this.load();
					this.showSearch = false;
					this.showTab = false
				}else {
					this.showSearch = false;
					this.showTab = false
					router.push("/error");
				}
			}
		}
	}
</script>
<style lang="scss">
	@import "../static/css/common.scss";
	@import "../static/css/dialog.scss";
.m-index_frame {
    margin: 10px;
    background: $color_white;
    border-radius: $border-radius;
    padding: 5px 20px;
    font-size: 16px;
    color: #333;
    input {
        border: none;
        width: 100%;
        height: 20px;
        outline: none;
    }
}
.m-note_item  {
    position: relative;
    time {
        font-size: 12px;
        color: #999;
    }
    .icon-z-list {
        position: absolute;
        top: 50%;
        right: 3%;
        transform: translate(0, -50%);
        -webkit-transform: translate(0 , -50%);
        color: $color_gray;
    }
}
.m-tab {
    background-color: $color_white;
    padding: 10px 0;
    .iconfont {
        display: block;
        padding-bottom: 5px;
        font-size: $fs20;
    }
    .tab {
    	color: $color_87;
    	&.active {
    		color: $color_org;
    	}
    }
}
.m-icon {
    position: absolute;
    top: 60%;
    right: 12%;
    .iconfont {
        color: #999999;
        display: block;
        padding-bottom: 20px;
        font-size: $fs28;
        &:active {
        	color: $color_org;
        }
    }
}

a {
    outline:none;
    text-decoration:none;
    -webkit-tap-highlight-color:rgba(200,200,200,0);
}
a:link{
    outline:none;
    text-decoration:none;
    -webkit-tap-highlight-color:rgba(200,200,200,0);
}
a:visited {
    outline:none;
    text-decoration:none;
    -webkit-tap-highlight-color:rgba(200,200,200,0);
}
a:hover {
    outline:none;
    text-decoration:none;
    -webkit-tap-highlight-color:rgba(200,200,200,0);
}
a:active {
    outline:none;
    text-decoration:none;
    -webkit-tap-highlight-color:rgba(200,200,200,0);
} 

</style>
