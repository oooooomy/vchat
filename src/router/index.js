import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {auth: true}
    },
    {
        path: '/chat/:id',
        name: 'Chat',
        component: () => import('../views/chat/index'),
        meta: {auth: true}
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/index'),
        meta: {auth: false}
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/register/index'),
        meta: {auth: false}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
