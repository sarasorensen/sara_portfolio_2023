import { createRouter, createWebHistory } from "vue-router"
import PresentationItem from './src/components/PresentationItem.vue';
import Contact from './src/view/Contact.vue';
import Resume from './src/view/Resume.vue';
import Projects from './src/view/Projects.vue';
const  routes = [
    {
        path: '/',
        name: 'home', 
        component: PresentationItem,
    },
    {
        path: '/contact',
        name: 'Contact', 
        component: Contact,
    },
    {
        path: '/projects',
        name: 'Projects', 
        component: Projects,
    },
    {
        path: '/resume',
        name: 'Resume', 
        component: Resume,
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

export default router;