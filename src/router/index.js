import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import add from '@/components/add'
import error from '@/components/error'
import notelist from '@/components/notelist'
import about from '@/components/about'

//安装插件
Vue.use(Router)
Vue.use(VueResource)

	
export default new Router({
	routes:[
		{
			path:"/",
			component:notelist,
			/*children:[
				{
					path:"con",
					component:tem_cont
				}
			]*/
		},
		{
			path:"/add/:id",
			component:add
		},
		{
			path:"/add",
			component:add
		},
		{
			path:"/about",
			component:about
		},
		{
			path:"/error",
			component:error
		}
	]
})
