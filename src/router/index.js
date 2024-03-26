import { createRouter, createWebHistory } from 'vue-router'
import Ex00View from '../views/Ex00View.vue'
import MainView from '@/views/main/MainView.vue' // @는 src폴더 의미
import LoginFormView from '@/views/user/LoginFormView.vue'
import ModifyFormView from '@/views/user/ModifyFormView.vue'
import JoinFormView from '@/views/user/JoinFormView.vue'
import JoinOkView from '@/views/user/JoinOkView.vue'
import AddListView from '@/views/guestbook/AddListView.vue'
import DeleteFormView from '@/views/guestbook/DeleteFormView.vue'

const routes = [
  {
    path : '/0',
    name : 'ex00',
    component : Ex00View
  },
  {
    path : '/',
    name : '/',
    component : MainView
  },
  {
    path : '/user/loginform',
    name : '/user/loginform',
    component : LoginFormView
  },
  {
    path : '/user/modifyform',  
    name : '/user/modifyform',
    component : ModifyFormView
  },
  {
    path : '/user/joinform',
    name : '/user/joinform',
    component : JoinFormView
  },
  {
    path : '/user/joinok',
    name : '/user/joinok',
    component : JoinOkView
  },
  {
    path : '/gb/list',
    name : '/gb/list',
    component : AddListView
  },
  {
    path : '/gb/deleteform/:no',
    name : '/gb/deleteform/:no',
    component : DeleteFormView
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
