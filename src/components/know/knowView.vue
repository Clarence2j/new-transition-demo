<template>
    <div class="know-view">
        <div class="top">
            <div 
                class="top_child flex1"
                v-for="(item , key) in topArr"
                :key="key"
                :class="curState==key?'curClass':''"
                @click="toChangeTypeFn(item)"
            >{{item.name}}</div>
        </div>
        <div class="slotDiv"></div>
        <div>
        <button @click="show=!show">show</button>
            <transition name="fade">
                <p v-show="show">hello</p>
            </transition>
        </div>
    </div>
</template>
<script>

export default{
    name : 'KnowIndex',
    data(){
        return {
            topArr : [
                {
                    name : '全部',
                    index : 0,
                    path : '/'
                },
                {
                    name : '原创',
                    index : 1,
                    path : '/'
                },
                {
                    name : '推荐',
                    index : 2,
                    path : '/'
                },
                {
                    name : '精华',
                    index : 3,
                    path : '/'
                },
            ],
            curState : 0,//当前选中状态索引
            show : true,
        }
    },
    methods : {
        toChangeTypeFn(item){
            this.curState = item.index;
        },
    }
}
</script>
<style lang="scss" scoped>
/*  当前状态    */
.curClass{
    color : yellow;
}
/*   过渡   */
.fade-enter-active, .fade-leave-active{
    transition: all 0.5s ease;
}      
.fade-enter, .fade-leave-active{
    opacity: 0;
}
.know-view{
    width : 100%;
    height : 100%;
    position : relative;
    .top{
        width : 100%;
        position : fixed;
        top : 0;
        left : 0;
        height : 1rem;
        background : aqua;
        @include display-flex;
        @include justify-content-space;
        .top_child{
            line-height : 1rem;
            text-align : center;
        }
    }
    .slotDiv{
        width : 100%;
        height : 1rem;
    }
}
</style>