import request from '../utils/request'

export function getGroup() {
    return request({
        url: '/group/list',
        method: 'get'
    })
}

export function getGroupById(id) {
    return request({
        url: '/group/list?groupID=' + id,
        method: 'get'
    })
}

export function joinGroup(id) {
    return request({
        url: '/group/join?groupID=' + id,
        method: 'get'
    })
}

export function createGroup(name) {
    return request({
        url: '/group/create?groupName=' + name,
        method: 'get'
    })
}
