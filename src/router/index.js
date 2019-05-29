import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/pages/Home'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
			{
			path: '/admin/login',
			name: 'login',
			component: () => import('../pages/admin/login'),
			meta:{
				title: '登录',
				requireAuth:true,
				keepAlive: false // 不需要缓存
			}
		},
  ]
})