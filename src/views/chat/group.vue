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
                        name="https://img.yzcdn.cn/vant/cat.jpeg"
                        size="42"/>
                <div>
                    <div><b>{{group.name}}</b></div>
                    <div><b style="color: green;font-size: 12px;margin-left: 8px"> Members ({{group.number}})</b></div>
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
                    {{'我：' + item.content}}
                </div>
                <div v-else class="message-item">
                    {{item.from_name +': '+ item.content}}
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
    import {getGroupById, joinGroup} from "../../api/group";
    import {getUserById} from "../../api/user";

    export default {
        name: "index",

        data() {
            return {
                groupId: '',
                myToken: '',
                inputMsg: '',
                ws: {},
                me: {},
                group: {},
                msgList: [
                    {
                        from_name: '群消息',
                        send_from: this.myToken,
                        send_to: this.groupId,
                        content: '欢迎加入本群聊 !'
                    }
                ]
            };
        },

        mounted() {
            this.myToken = localStorage.getItem("token")
            this.groupId = this.$route.params.id
            this.ws = this.$store.state.ws
            getUserById(localStorage.getItem("token")).then((res) => {
                if (res.status === true) {
                    this.me = res.data.user
                }
            })
            getGroupById(this.groupId).then((res) => {
                if (res.status === true) {
                    this.group = res.data.group
                    //判断是否为群聊成员
                    if (res.data.join === false) {
                        this.$dialog.confirm({
                            title: '群公告',
                            message: '您还未加入本群聊，请点击确认加入',
                        })
                            .then(() => {
                                joinGroup(this.groupId).then((res) => {
                                    if (res.status === true) {
                                        this.group.number += 1
                                    }
                                })
                            })
                            .catch(() => {
                                this.$router.go(-1)
                            });
                    }
                }
            })
            this.ws.onmessage = (evt) => {
                if (evt.data) {
                    const msg = JSON.parse(evt.data)
                    this.msgList.push(msg)
                    console.log(msg)
                }
            }
        },

        methods: {
            back() {
                this.$router.push('/')
            },

            sendMessage() {
                if (this.inputMsg.length > 0) {
                    const msg = {
                        from_name: this.me.nickname,
                        send_from: this.myToken,
                        send_to: this.groupId,
                        content: this.inputMsg,
                        type: 2
                    }
                    this.ws.send(JSON.stringify(msg))
                    this.msgList.push(msg)
                    this.inputMsg = ''
                }
            },

        }
    }
</script>

<style scoped>
    @import "../../assets/css/chat.css";
</style>