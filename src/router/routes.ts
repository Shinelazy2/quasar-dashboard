import { RouteRecordRaw } from 'vue-router'
import VacationPage from 'components/VacationPage.vue'
import NotionClone from 'components/NotionClone.vue'
import MainLayout from 'layouts/MainLayout.vue'
import TestLayout from 'layouts/TestLayout.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    redirect: 'signin',
    children: [
      { path: 'signin', component: () => import('components/LoginForm.vue') },
      { path: 'signup', component: () => import('components/JoinForm.vue') },
      // { path: '', component: () => import('pages/IndexPage.vue') },
      // { path: '/login', component: () => }
    ],
  },
  {
    path: '/main',
    component: MainLayout,
    children: [
      { path: 'notion', component: NotionClone },
      {
        path: 'vacation',
        component: VacationPage,
      },
    ],
  },
  {
    path: '/main/test',
    component: TestLayout,
    // children: [
    //   { path: 'notion', component: NotionClone },
    //   {
    //     path: 'vacation',
    //     component: VacationPage,
    //   },
    // ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
