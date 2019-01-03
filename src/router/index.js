import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import p5Pong from '@/components/p5Pong'
import p5Pong2 from '@/components/p5Pong2'
import Snake from '@/components/Snake'
import Snake2 from '@/components/Snake2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/p5Pong2',
      name: 'p5Pong2',
      component: p5Pong2
    },    
    {
      path: '/p5Pong',
      name: 'p5Pong',
      component: p5Pong
    },
    {
      path: '/snake',
      name: 'snake',
      component: Snake
    },
    {
      path: '/snake2',
      name: 'snake',
      component: Snake2
    }
  ]
})