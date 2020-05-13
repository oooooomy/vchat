<template>
    <div>
        <!-- 联系人卡片 -->
        <van-contact-card
                add-text="新建群聊"
                @click="show = true"
        />
        <van-popup v-model="show" position="left" :style="{ width: '50%',height: '100%' }">
            <van-form @submit="onSubmit" style="margin-top: 50px">
                <van-field
                        v-model="name"
                        name="用户名"
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
    </div>
</template>

<script>
    import {Notify} from 'vant'

    export default {
        data() {
            return {
                show: false,
                name: '',
            };
        },

        computed: {},

        methods: {
            onSubmit() {
                Notify({
                    message: '添加成功',
                    color: '#FFFFFF',
                    background: '#1eb2a6',
                });

                this.show = false;
                this.name = ''

            }
        },
    };
</script>

<style scoped>

</style>