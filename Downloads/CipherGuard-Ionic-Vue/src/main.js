import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'
import { createRouter, createWebHistory } from '@ionic/vue-router'

import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/flex-utils.css'
import './theme.css'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('./views/HomePage.vue') },
    { path: '/cipher/:type', component: () => import('./views/CipherPage.vue') },
    { path: '/history', component: () => import('./views/HistoryPage.vue') },
    { path: '/settings', component: () => import('./views/SettingsPage.vue') }
  ]
})

createApp(App).use(IonicVue).use(router).mount('#app')