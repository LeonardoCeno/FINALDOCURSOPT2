import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Market.vue'
import LoginView from '../views/Login.vue'
import PainelView from '../views/Painel.vue'
import DadosView from '../views/Dados.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/painel',
      name: 'Painel',
      component: PainelView,
    },
    {
      path: '/dados',
      name: 'Dados',
      component: DadosView,
    }
  ],
})

export default router
