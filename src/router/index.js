import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '../pages/Home/HomeComponent'
import LoginComponent from '../pages/Login/LoginComponent'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'LoginComponent',
            component: LoginComponent
        },
        {
            path: '/home',
            name: 'HomeComponent',
            component: HomeComponent
        }
    ]
})