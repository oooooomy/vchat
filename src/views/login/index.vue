<template>
    <div class="login">
        <div class="login-header">
            <img class="login-header-img" src="../../assets/img/login.png" alt="login">
        </div>
        <div class="login-title">Login</div>
        <div class="login-box">
            <div class="login-box-form">
                <div class="login-box-item">
                    <van-cell-group>
                        <van-field v-model="form.mobile" :border="false" type="digit" placeholder="Mobile"/>
                    </van-cell-group>
                </div>
                <van-divider style="margin: 3px"/>
                <div class="login-box-item">
                    <van-cell-group>
                        <van-field v-model="form.password" :border="false" type="password" placeholder="Password"/>
                    </van-cell-group>
                </div>
            </div>
            <van-button
                    @click="submit"
                    class="login-box-btn"
                    round type="info"
                    color="linear-gradient(to right, #4bb0ff, #6149f6)">
                <b>Login</b>
            </van-button>
            <div class="login-box-register">
                <router-link to="/register" style="color: #888888">还没有账号?</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {checkLoginForm} from "../../utils/check";
    import {userLogin} from "../../api/user";

    export default {
        name: "index",
        data() {
            return {
                form: {
                    mobile: '',
                    password: ''
                },
            }
        },

        methods: {
            submit() {
                if (checkLoginForm(this.form).valueOf()) {

                    //登录逻辑
                    userLogin(this.form).then((res) => {
                        if (res.status === true) {
                            const user = res.data.user
                            //保存登录信息
                            localStorage.setItem("token", user.id)
                            this.$router.push('/')
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/css/login.css";

</style>