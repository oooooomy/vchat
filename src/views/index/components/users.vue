<template>
    <div>
        <van-nav-bar class="index-header" :border=false>
            <template #left>
                <h1>Chats</h1>
            </template>
            <template #right>
                <van-button
                        @click="refresh"
                        :round="true"
                        color="linear-gradient(to right, #4bb0ff, #6149f6)"
                        size="small">
                    <van-icon name="plus" style="font-weight: 700;" color="#FFFFFF"/>
                    <b style="color: #d4f3ef;padding-left: 3px;margin-top: -10px">Refresh</b>
                </van-button>
            </template>
        </van-nav-bar>
        <van-search
                style="margin-bottom: 30px;margin-top: 8px"
                v-model="searchValue"
                shape="round"
                placeholder="  搜索在线用户 ..."
        />
        <van-list
                class="user-list"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多用户在线了"
                @load="onLoad"
        >
            <div v-for="(item,index) in list" :key="index" class="user-list-item" @click="openChat(item.id)">
                <van-icon
                        style="margin-right: 3px;"
                        name="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        size="50"/>
                <div style="margin-top: 8px">
                    <div v-if="item.id === token" class="item-user-nickname">
                        我
                    </div>
                    <div v-else class="item-user-nickname">{{item.nickname}}</div>
                    <div class="item-user-time">Monday</div>
                    <div class="item-user-des">Online</div>
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>
    import {getOnlineUser} from "../../../api/user";

    export default {
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                searchValue: '',
                token: localStorage.getItem("token")
            };
        },

        mounted() {
        },

        methods: {
            openChat(id) {
                this.$router.push("/privateChat/" + id)
            },

            onLoad() {
                getOnlineUser().then((res) => {
                    this.list = res.data.users
                    setTimeout(() => {
                        this.finished = true
                    }, 800)
                })
            },

            refresh() {
                location.reload()
            }
        },
    };
</script>

<style scoped>
    @import "../../../assets/css/index.css";
</style>