import {Notify} from 'vant'

export function checkLoginForm(form) {
    if (form.mobile.length !== 11 || form.password.length < 6) {
        Notify({
            message: '请输入正确的手机号码和不少于6位的密码',
            color: '#FFFFFF',
            background: '#1eb2a6',
        });
        return false
    }
    return true
}

export function checkRegisterForm(form) {
    if (form.nickname.length === 0) {
        Notify({
            message: '您的用户昵称不能为空',
            color: '#FFFFFF',
            background: '#1eb2a6',
        });
        return false
    }
    if (form.mobile.length !== 11 || form.password.length < 6) {
        Notify({
            message: '请输入正确的手机号码和不少于6位的密码',
            color: '#FFFFFF',
            background: '#1eb2a6',
        });
        return false
    }
    return true
}