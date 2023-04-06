import { createRouter, createWebHistory } from "vue-router"
import PresentationItem from '../resume/src/components/PresentationItem.vue';

const  routes = [
    {
        path: '/',
        component: PresentationItem,
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

export default router;