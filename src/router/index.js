import { createRouter, createWebHistory } from 'vue-router'
import Ex00View from '../views/Ex00View.vue'
import MainView from '@/views/main/MainView.vue' // @는 src폴더 의미
import LoginFormView from '@/views/user/LoginFormView.vue'

const routes = [
  {
    path : '/0',
    name : 'ex00',
    component : Ex00View
  },
  {
    path : '/',
    name : 'main',
    component : MainView
  },
  {
    path : '/user/loginform',
    name : 'loginform',
    component : LoginFormView
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
