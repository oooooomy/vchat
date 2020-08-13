import request from '../utils/request'

export function userLogin(form) {
    return request({
        url: '/user/login',
        method: 'post',
        data: form
    })
}

export function userRegister(form) {
    return request({
        url: '/user/register',
        method: 'post',
        data: form
    })
}

export function getOnlineUser() {
    return request({
        url: '/user/online',
        method: 'get'
    })
}

export function getUserById(id) {
    return request({
        url: '/user?id=' + id,
        method: 'get'
    })
}