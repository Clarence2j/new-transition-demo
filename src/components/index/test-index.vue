<template>
    <div class="test-index">
        <input type="button" value="前往mock测试页面" @click="toPath">
    </div>
</template>
<script>
export default{
    name : 'testIndex',
    data(){
        return {}
    },
    methods : {
        toPath(){
            this.$router.push({
                path : '/test/mock'
            })
        },
    }
}
</script>