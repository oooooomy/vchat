import router from './router/index'
import {Notify} from 'vant'

router.beforeEach((to, from, next) => {
    if (to.meta.auth === true) {
        //验证token
        if (!localStorage.getItem("token")) {
            Notify({
                message: '请您先登录后再访问页面',
                color: '#FFFFFF',
                background: '#d9455f',
            });
            next({path: '/login'})
        } else {
            next()
        }
    } else {
        next()
    }
})