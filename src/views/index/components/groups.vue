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
        <van-contact-card
                add-text="新建群聊"
                @click="show = true"
        />
        <van-popup v-model="show" position="left" :style="{ width: '50%',height: '100%' }">
            <van-form @submit="onSubmit" style="margin-top: 50px">
                <van-field
                        v-model="name"
                        placeholder="群聊名称"
                        :rules="[{ required: true, message: '请填写群聊名称' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
        </van-popup>
        <van-list
                class="user-list"
                style="margin-top: 20px"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <div v-for="(item,index) in list" :key="index" class="user-list-item" @click="openChat(item.id)">
                <van-icon
                        style="margin-right: 3px;"
                        name="https://img.yzcdn.cn/vant/cat.jpeg"
                        size="50"/>
                <div style="margin-top: 8px">
                    <div class="item-user-nickname">{{item.name}}</div>
                    <div class="item-user-time">{{item.time}}</div>
                    <div class="item-user-des">成员 ({{item.number}})</div>
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>
    import {createGroup, getGroup} from "../../../api/group";
    import {checkGroupName} from "../../../utils/check";

    export default {
        data() {
            return {
                show: false,
                name: '',
                list: [],
                loading: false,
                finished: false,
                searchValue: ''
            };
        },

        mounted() {

        },
        methods: {
            onLoad() {
                getGroup().then((res) => {
                    if (res.status === true) {
                        this.list = res.data.groups
                        setTimeout(() => {
                            this.finished = true
                        }, 800)
                    }
                })
            },

            refresh() {
                location.reload();
            },

            onSubmit() {
                if (checkGroupName(this.name.valueOf()).valueOf()) {
                    createGroup(this.name.valueOf()).then((res) => {
                        if (res.status === true) {
                            this.onLoad()
                        }
                    })
                    this.show = false;
                    this.name = ''
                }

            },

            openChat(id) {
                this.$router.push('/groupChat/' + id)
            }
        },
    };
</script>

<style scoped>
</style>