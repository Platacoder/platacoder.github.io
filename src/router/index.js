import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import Resume from '../views/Resume.vue'
import Projects from '../views/Projects.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  },
  {
    path:'/resume',
    name:'resume',
    component: Resume
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  }

  
]

const router = new VueRouter({
  routes
})

export default router
