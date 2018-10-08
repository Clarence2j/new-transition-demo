import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { resolve } from 'url';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect : '/indexView/index',
    },
    {
      path : '/ccc',
      name : 'ccc',
      component : resolve => require(['@/view/ccc'] , resolve)
    },
    {
      path : '/indexView',
      name : 'index',
      component : resolve => require(['@/view/indexView'] , resolve),
      children : [
        {
          path : 'index',
          name : 'indexIn',
          component : resolve => require(['@/components/index/index'] , resolve)
        },
        {
          path : 'bank',
          name : 'bank',
          component : resolve => require(['@/components/bank/index'] , resolve)
        },
        {
          path : 'active',
          name : 'active',
          component : resolve => require(['@/components/active/index'] , resolve)
        },
        {
          path : 'knowledge',
          name : 'knowledge',
          component : resolve => require(['@/components/know/index'] , resolve)
        },
        {
          path : 'mine',
          name : 'mine',
          component : resolve => require(['@/components/mine/index'] , resolve)
        }
      ]
    },
    //know知道
    {
      path : '/indexView/knowledge/knowView',
      name : 'knowView',
      component : resolve => require(['@/components/know/knowView'] , resolve)
    },
    {
      path : '/test',
      name : 'testView',
      redirect : '/test/testIndex',
      component : resolve => require(['@/view/indexView'] , resolve),
      children : [
        {
          path : 'testIndex',
          name : 'test',
          component : resolve => require(['@/components/index/test-index'] , resolve)
        },
        {
          path : 'mock',
          name : 'mock',
          component : resolve => require(['@/components/index/test-mock'] , resolve)
        }
      ]
    }
  ]
})
