<template>
    <div>
        <Users v-if="active===0"/>
        <Groups v-if="active===1"/>
        <Me v-if="active===2"/>
        <van-tabbar class="index-bar" v-model="active" active-color="#d9455f" :border=false>
            <van-tabbar-item icon="friends">Online</van-tabbar-item>
            <van-tabbar-item icon="star">Group</van-tabbar-item>
            <van-tabbar-item icon="manager">Myself</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import Users from './components/users'
    import Groups from './components/groups'
    import Me from './components/me'

    export default {
        components: {
            Users,
            Groups,
            Me
        },
        data() {
            return {
                active: 0,
            };
        },

        methods: {
            refresh() {
                location.reload()
            }
        },
    };
</script>

<style scoped>

    .index-bar {
        height: 60px;
        box-shadow: 15px 0 15px -15px #000,
        -15px 0 15px -15px #000;
    }
</style>