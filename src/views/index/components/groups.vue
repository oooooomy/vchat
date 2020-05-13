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
        <AddGroup />
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                    class="user-list"
                    style="margin-top: 20px"
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div v-for="(item,index) in list" :key="index" class="user-list-item">
                    <van-icon
                            style="margin-right: 3px;"
                            name="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                            size="50"/>
                    <div style="margin-top: 8px">
                        <div class="item-user-nickname">相亲相爱一家人</div>
                        <div class="item-user-time">Monday</div>
                        <div class="item-user-des">成员 (20)</div>
                    </div>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    import AddGroup from "../../../components/AddGroup";

    export default {
        components: {
            AddGroup
        },
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                refreshing: false,
                searchValue: ''
            };
        },
        methods: {
            onLoad() {
                setTimeout(() => {
                    if (this.refreshing) {
                        this.list = [];
                        this.refreshing = false;
                    }

                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.loading = false;

                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 800);
            },
            onRefresh() {
                // 清空列表数据
                this.finished = false;

                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.loading = true;
                this.onLoad();
            },

            refresh() {
                location.reload();
            }
        },
    };
</script>

<style scoped>
</style>