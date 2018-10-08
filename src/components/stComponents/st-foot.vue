<template>
    <div class="st-foot-nav">
        <div id="nav">
            <router-link to="/indexView/index" exact>
                <p>首页</p>
            </router-link>
            <router-link to="/indexView/bank" >
                <p>银行</p>
            </router-link>
            <router-link to="/indexView/active" >
                <p>活动</p>
            </router-link>
            <router-link to="/indexView/knowledge" >
                <p>知道</p>
            </router-link>
            <router-link to="/indexView/mine" >
                <p>我的</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default{
    name : 'FootNav',
    data(){
        return {
            curStates : 0
        }
    },
    props : {
        navArr : {
            type : Array,
            default : function(){
                return [];
            }
        },
        styleList : {
            type : Object,
            default : function(){
                return {};
            }
        }
    },
    methods : {
        styleFn(){
            for(let name in this.styleList){
                nav.style[name] = this.styleList[name];
            }
        },
        toPath(val,key){
            this.curStates = key;
            // this.$router.push({
            //     path : val
            // });
        },
    },
    mounted() {
        if(JSON.stringify(this.styleList) != '{}'){
            this.styleFn();
        }
    },
}
</script>
<style lang="scss" scoped>
.st-foot-nav{
    #nav{
        width : 100%;
        @include display-flex;
        @include justify-content-space;
    }
    p{
        color :#fff;
    }
    .router-link-active p{
        color : red;
    }
}
</style>