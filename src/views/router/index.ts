import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import StoryBoardPage from '../pages/StoryBoardPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/StoryBoardPage',
        name: 'StoryBoardPage',
        component: StoryBoardPage
    },
    {
        path: '/PictureConnectPage',
        name: 'PictureConnectPage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/pictureConnectPage/PictureConnectPage.vue')
    },
    {
        path: '/test',
        name: 'Test',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/Test.vue')
    }
]

const router = new VueRouter({
                                 routes
                             })

export default router
