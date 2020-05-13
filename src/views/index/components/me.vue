<template>
    <div class="myself">
        <div class="myself-header">
            <img class="myself-header-img" src="../../../assets/img/ad.png" alt="loading"/>
            <van-icon
                    class="myself-header-icon1"
                    @click="back"
                    style="transform:rotate(90deg);margin-right: 20px"
                    color="#FFFFFF"
                    name="down"
                    size="20"/>
            <van-icon
                    @click="showShare = true"
                    class="myself-header-icon2"
                    name="wap-nav"
                    color="#FFFFFF"
                    size="25"/>
            <div class="myself-header-text1">Personal setting</div>
            <div class="myself-header-text2">Time | Monday 2020-12-34 12:23:47</div>
        </div>
        <div class="myself-content">
            <div class="myself-content-header">
                <van-icon
                        name="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        size="50"/>
                <div>
                    <div style="margin-top: 8px;font-weight: 500">Aa ya~</div>
                    <div style="color: #888888;font-size: 11px;margin-top: 6px;font-weight: 400">
                        Mobile 86 - 15093361631
                    </div>
                </div>
                <div>
                    <svg x="1589284602578" class="myself-content-header-share" viewBox="0 0 1024 1024"
                         xmlns="http://www.w3.org/2000/svg"
                         p-id="2601" width="22" height="22">
                        <path d="M896 810.666667a128 128 0 0 1-256 0 89.173333 89.173333 0 0 1 0-10.666667 21.76 21.76 0 0 0-10.24-20.48l-279.04-162.986667a21.333333 21.333333 0 0 0-23.04 0A125.44 125.44 0 0 1 256 640a128 128 0 0 1 0-256 125.44 125.44 0 0 1 71.68 22.613333 21.333333 21.333333 0 0 0 23.04 0l279.466667-162.986666a21.76 21.76 0 0 0 9.813333-19.626667A89.173333 89.173333 0 0 1 640 213.333333a128 128 0 1 1 45.653333 97.28l-291.84 170.666667a21.76 21.76 0 0 0-10.24 20.48 133.546667 133.546667 0 0 1 0 21.333333 21.76 21.76 0 0 0 10.24 20.48l279.466667 162.986667a21.333333 21.333333 0 0 0 23.04 0A125.44 125.44 0 0 1 768 682.666667a128 128 0 0 1 128 128z"
                              p-id="2602" fill="#515151"></path>
                    </svg>
                </div>
            </div>
            <div class="myself-content-des">
                This is a real-time websocket chat software with vue as the front-end page and Golang as the server
                language, making use of the high-performance network framework gin.
            </div>
            <van-share-sheet
                    @select="handleOptions"
                    v-model="showShare"
                    :options="options"
                    title="Operation Bar"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "me",
        data() {
            return {
                user: {},
                showShare: false,
                options: [
                    {name: '返回首页', icon: 'poster'},
                    {name: '退出登录', icon: 'qrcode'},
                ],
            }
        },
        methods: {
            back() {
                this.$router.go(0)
            },

            logout() {
                this.$router.push('/login')
            },

            handleOptions(options, index) {
                if (index === 0) {
                    this.showShare = false
                    this.$router.go(0)
                } else {
                    this.showShare = false
                    this.logout()
                }
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/index.css";

    .myself {
        height: 100vh !important;
        background-color: rgba(52, 46, 173, 0.9);
        font-family: -apple-system, "Helvetica Neue", "Arial", "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei", "微软雅黑", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif
    }

    .myself-header {
        height: 40%;
    }

    .myself-header-img {
        width: 100%;
        height: 35%;
        margin-top: 40px;
        z-index: -1;
        position: absolute;
        opacity: 0.8;
    }

    .myself-content {
        width: 100%;
        height: 60%;
        background-color: #FFFFFF;
        position: absolute;
        z-index: 999999;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }

    .myself-content-header {
        display: flex;
        margin-top: 50px;
        margin-left: 25px;
    }

    .myself-content-header-share {
        position: absolute;
        right: 20px;
        margin-top: 16px;
    }

    .myself-header-icon1 {
        margin-top: 22px;
        margin-left: 30px;
    }

    .myself-header-icon2 {
        float: right;
        margin-top: 20px;
        margin-right: 30px;
    }

    .myself-header-text1 {
        color: #FFFFFF;
        font-size: 30px;
        font-weight: bolder;
        margin-top: 40px;
        margin-left: 40px;
    }

    .myself-header-text2 {
        color: #f5f6f7;
        font-weight: 500;
        font-size: 12px;
        margin-top: 5px;
        margin-left: 42px;
    }

    .myself-content-des {
        margin: 20px 40px;
        line-height: 22px;
        font-size: 13px;
        color: #888888;
        word-break:break-all;
    }
</style>