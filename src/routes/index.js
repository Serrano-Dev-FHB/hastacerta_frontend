import { createRouter, createWebHistory } from "vue-router"
import IndexView from "./../views/IndexView"

const routes = [
    { path: "/", component: IndexView }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;