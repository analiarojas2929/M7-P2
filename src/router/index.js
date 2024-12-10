import { createRouter, createWebHistory } from 'vue-router'
import Counter from '../components/Counter.vue'
import Parent from '../components/Parent.vue'

const routes = [
  {
    path: '/',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/parent',
    name: 'Parent',
    component: Parent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router