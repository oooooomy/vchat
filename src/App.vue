<template>
    <router-view/>
</template>

<style>
</style>

<script>
    export default {
        mounted() {
            const ws = new WebSocket('ws://localhost:8000/ping?id=' +
                localStorage.getItem("token"))
            this.$store.commit('addWs', ws)
            // 连接打开时触发
            ws.onopen = () => {
                console.log("Connection open ...")
            }

            ws.onclose = () => {
                Notify({
                    message: '您的连接已断开！',
                    color: '#FFFFFF',
                    background: '#d9455f',
                });
            }

        },
    }
</script>