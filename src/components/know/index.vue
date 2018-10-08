<template>
    <div class="know-index">
        我是知道首页
        <div class="toMore" @click="toMoreFn">更多</div>
    </div>
</template>
<script>

export default{
    name : 'KnowIndex',
    data(){
        return {}
    },
    methods : {
        toMoreFn(){
            this.$router.push({
                path : '/indexView/knowledge/knowView'
            })
        },
    }
}
</script>
<style lang="scss" scoped>
.know-index{
    width : 100%;
    height : 100%;
    .toMore{
        font-size : 0.4rem;
        color : aqua;
    }
}
</style>