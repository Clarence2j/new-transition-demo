<template>
    <div class="index">
        我是首页
        <input type="button" value="点击获取数据" @click="getMsg">
    </div>
</template>
<script>

export default{
    name : 'index',
    data(){
        return {
            param_key : {
                "head" : {
                    "TYPE" : "GET_DEPOSIT_PRD",
                    "SESSION_ID" : "",
                    "TOKEN":"",
                    "DEVICE_ID":"",
                    "SYSTEM_TYPE":"h5",
                    "VERSION":""
                },
                "param" : {
                    "depositType" : "1",
                    "currentPage" : "1",
                    "IS_ENABLED":"1"
                }
            }
        }
    },
    methods : {
        getMsg(){
            var param = "param_key=" + JSON.stringify(this.param_key);
            this.$fetch('/finsuitPhone/deal',param).then(res => {
                console.log(res);
            })
        }
    }
}
</script>
<style lang="scss" scoped>
/* .index{
    width : 100%;
    height : 100%;
    position : relative;
} */
</style>