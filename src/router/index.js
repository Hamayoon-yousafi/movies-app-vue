import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/movie/:title',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: Search,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
