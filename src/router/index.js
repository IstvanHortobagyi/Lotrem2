import { createRouter, createWebHistory } from 'vue-router'
import Generator from '../views/Generator.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Generator
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/About.vue')
		},
		{
			path: '/contact',
			name: 'contact',
			component: () => import('../views/Contact.vue')
		},
	]
})

export default router
