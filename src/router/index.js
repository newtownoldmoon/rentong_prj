import Vue from 'vue'
import router from 'vue-router'
//components
import home from '@/components/home'
Vue.use(router)

export default new router({
    routes:[
        {
            path:"/",
            component:home
        },
    ]
})