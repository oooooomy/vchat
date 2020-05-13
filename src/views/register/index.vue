<template>
    <div class="login">
        <div class="login-header">
            <img class="login-header-img" src="../../assets/img/register.png" alt="login">
        </div>
        <div class="login-title">Register</div>
        <div class="login-box">
            <div class="login-box-form">
                <div class="login-box-item">
                    <van-cell-group>
                        <van-field v-model="nickname" :border="false" placeholder="Nickname"/>
                    </van-cell-group>
                </div>
                <van-divider style="margin: 3px"/>
                <div class="login-box-item">
                    <van-cell-group>
                        <van-field v-model="mobile" :border="false" placeholder="Mobile"/>
                    </van-cell-group>
                </div>
                <van-divider style="margin: 3px"/>
                <div class="login-box-item">
                    <van-cell-group>
                        <van-field v-model="password" :border="false" placeholder="Password"/>
                    </van-cell-group>
                </div>
            </div>
            <van-button
                    class="login-box-btn"
                    round type="info"
                    color="linear-gradient(to right, #4bb0ff, #6149f6)">
                <b>Register</b>
            </van-button>
            <div class="login-box-register">
                <router-link to="/login" style="color: #888888">去返回登录</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                nickname: '',
                mobile: '',
                password: ''
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/css/login.css";

</style>