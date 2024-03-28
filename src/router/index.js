import { createRouter, createWebHistory } from 'vue-router'
import Ex00View from '../views/Ex00View.vue'
import MainView from '@/views/main/MainView.vue' // @는 src폴더 의미
import LoginFormView from '@/views/user/LoginFormView.vue'
import ModifyFormView from '@/views/user/ModifyFormView.vue'
import JoinFormView from '@/views/user/JoinFormView.vue'
import JoinOkView from '@/views/user/JoinOkView.vue'
import AddListView from '@/views/guestbook/AddListView.vue'
import DeleteFormView from '@/views/guestbook/DeleteFormView.vue'
import AttachFormView from '@/views/attach/AttachFormView.vue'
import AttachResultView from '@/views/attach/AttachResultView.vue'
import GalleryListView from '@/views/gallery/GalleryListView.vue'
import BoardListView from '@/views/board/BoardListView.vue'
import BoardWriteFormView from '@/views/board/BoardWriteFormView.vue'
import BoardReadView from '@/views/board/BoardReadView.vue'
import BoardModifyFormView from '@/views/board/BoardModifyFormView.vue'

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
    path : '/guestbook',
    name : '/guestbook',
    component : AddListView
  },
  {
    path : '/gb/deleteform/:no',
    name : '/gb/deleteform/:no',
    component : DeleteFormView
  },
  {
    path : '/attach/form',
    name : '/attach/form',
    component : AttachFormView
  },
  {
    path : '/attach/result',
    name : '/attach/result',
    component : AttachResultView
  },
  {
    path : '/gallery',
    name : '/gallery',
    component : GalleryListView
  },
  {
    path : '/board',
    name : '/board',
    component : BoardListView
  },
  {
    path : '/board/writeform',
    name : '/board/writeform',
    component : BoardWriteFormView
  },
  {
    path : '/board/read/:no',
    name : '/board/read/:no',
    component : BoardReadView
  },
  {
    path : '/board/modifyform/:no',
    name : '/board/modifyform/:no',
    component : BoardModifyFormView
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
