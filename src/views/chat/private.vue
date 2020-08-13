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
                    <div style="margin-left: 8px"><b>{{user.nickname}}</b></div>
                    <div><b style="color: green;font-size: 12px;margin-left: 8px"> Online</b></div>
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
                <div v-else class="message-item">
                    {{item.content}}
                </div>
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
    import {getUserById} from "../../api/user";

    export default {
        name: "index",

        data() {
            return {
                send_to: '',
                myToken: '',
                inputMsg: '',
                ws: {},
                user: {},
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
            this.myToken = localStorage.getItem("token")
            this.send_to = this.$route.params.id
            this.ws = this.$store.state.ws
            getUserById(this.send_to).then((res) => {
                if (res.status === true) {
                    this.user = res.data.user
                }
            })
            this.ws.onmessage = (evt) => {
                if (evt.data) {
                    const msg = JSON.parse(evt.data)
                    this.msgList.push(msg)
                }
            }
        },

        methods: {
            back() {
                this.$router.push('/')
            },

            sendMessage() {
                if (this.send_to.valueOf() === this.myToken.valueOf()) {
                    this.$notify({
                        message: '您不能给自己发送信息哦',
                        color: '#FFFFFF',
                        background: '#d9455f',
                    });
                } else {
                    if (this.inputMsg.length > 0) {
                        const msg = {
                            from_name: this.$store.state.user.nickname,
                            send_from: this.myToken,
                            send_to: this.send_to,
                            content: this.inputMsg
                        }
                        this.ws.send(JSON.stringify(msg))
                        this.msgList.push(msg)
                        this.inputMsg = ''
                    }
                }
            },

        }
    }
</script>

<style scoped>
    @import "../../assets/css/chat.css";
</style>