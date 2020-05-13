<template>
    <div style="background-color: #f5f6f7;height: 100vh">
        <van-nav-bar style="height: 65px" class="chat-header" :border=false>
            <template #left>
                <van-icon
                        @click="back"
                        style="transform:rotate(90deg);margin-right: 20px"
                        color="#333333"
                        name="down"
                        size="20"/>
                <van-icon
                        name="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        size="42"/>
                <div>
                    <div style="margin-left: 8px"><b>Aa ya~</b></div>
                    <div><b style="color: green;font-size: 12px">Online</b></div>
                </div>
            </template>
            <template #right>
                <van-icon
                        style="transform:rotate(90deg);"
                        name="ellipsis"
                        color="#333333"
                        size="25"/>
            </template>
        </van-nav-bar>

        <div class="chat-main" style="">
            <div v-for="(item, index) in msgList" :key="index">
                <div v-if="item.send_from===myToken" class="message-item right">
                    {{item.content}}
                </div>
                <div v-else class="message-item">{{item.content}}</div>
                <div class="item-occupy"/>
            </div>
        </div>

        <div class="chat-bar">
            <div class="chat-bar-btn">
                <van-icon name="plus"/>
            </div>
            <van-cell-group :border="false" style="margin-top: 8px">
                <van-field v-model="inputMsg" placeholder="Type message..."/>
            </van-cell-group>
            <div class="chat-bar-btn send" @click="sendMessage">
                <svg x="1589271304274" class="chat-bar-btn-icon" viewBox="0 0 1024 1024"
                     xmlns="http://www.w3.org/2000/svg" p-id="3034" width="30" height="30">
                    <path d="M85.76 896l895.573333-384-895.573333-384-0.426667 298.666667 640 85.333333-640 85.333333z"
                          p-id="3035" fill="#ffffff"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",

        data() {
            return {
                send_to: '',
                myToken: '',
                inputMsg: '',
                msgList: [
                    {
                        send_from: this.myToken,
                        send_to: this.send_to,
                        content: '你好呀 !'
                    }
                ]
            };
        },

        mounted() {
            this.send_to = this.$route.params.id
        },

        methods: {
            back() {
                this.$router.push('/')
            },

            sendMessage() {
                const msg = {
                    send_from: this.myToken,
                    send_to: '2312',
                    content: this.inputMsg
                }
                this.msgList.push(msg)
                this.inputMsg = ''
            }
        }
    }
</script>

<style scoped>
    .chat-header {
        background-color: #FFFFFF;
        box-shadow: 15px 0 15px -15px #000,
        -15px 0 15px -15px #000;
    }

    .van-icon img {
        border-radius: 50%;
    }

    .chat-main {
        margin-top: 25px;
        margin-bottom: 70px;
        padding: 0 20px;
    }

    .chat-bar {
        background-color: #FFFFFF;
        display: flex;
        width: 100%;
        height: 70px;
        position: fixed;
        bottom: 0;
        z-index: 999;
        box-shadow: 15px 0 15px -15px #000,
        -15px 0 15px -15px #000;
    }

    .chat-bar-btn {
        color: #FFFFFF;
        text-align: center;
        line-height: 46px;
        font-size: 24px;
        font-weight: 800;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #00909e;
        margin-top: 10px;
        margin-left: 15px;
    }

    .send {
        position: absolute;
        right: 20px;
        margin-top: -25px;
        width: 54px;
        height: 54px;
        background-color: #e43f5a;
    }

    .chat-bar-btn-icon {
        margin-top: 12px;
        margin-left: 6px;
    }

    .van-icon img {
        margin-right: 0;
    }

    .message-item {
        display: inline-block !important;
        background-color: #FFFFFF;
        border-radius: 30px;
        font-size: 12px;
        padding: 10px 20px;
        margin-bottom: 10px;
        margin-right: 50px;
        line-height: 20px;
        font-family: Tahoma,Helvetica,Arial,"\5b8b\4f53",sans-serif;;
    }

    .right {
        background-color: #dddddd;
        float: right;
        margin-left: 50px;
        margin-right: 0;
    }

    .item-occupy {
        width: 100%;
        clear: both;
    }
</style>