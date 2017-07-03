import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import sellers from '@/components/sellers/sellers'
import ratings from '@/components/ratings/ratings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: sellers
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})
