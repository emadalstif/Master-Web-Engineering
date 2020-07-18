import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import Navcss from '../views/Navcss.vue'
import Navhtml from '../views/Navhtml.vue'
import Navjs from '../views/Navjs.vue'
import Navothers from '../views/Navothers.vue'
import Nav from '@/components/Nav'

Vue.use(VueRouter)
    // creat Router
const routes = [{
        path: '/',
        name: 'html',
        component: Nav
    },
    {
        path: '/css',
        name: 'navcss',
        component: Nav
    },
    {
        path: '/js',
        name: 'navjs',
        component: Navjs
    },
    {
        path: '/other',
        name: 'navothers',
        component: Navothers
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router