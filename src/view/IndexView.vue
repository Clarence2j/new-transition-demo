<template>
    <div class="index-view">
        <transition>
            <router-view></router-view>
        </transition>
        
        <foot-nav
            :styleList="styleList"
            :navArr="navArr"
            @changePage="changePage"
        ></foot-nav>
    </div>
</template>
<script>
import FootNav from '@/components/stComponents/st-foot';

export default{
    name : 'indexView',
    data (){
        return {
            styleList : {
                width : '100%',
                height : '1rem',
                position : 'fixed',
                bottom : '0',
                left : '0',
                background : 'blue',
                color : '#fff',
                lineHeight : '1rem',
                textAlign : 'center'
            },
            navArr : [
                {
                    path : '/test',
                    name : '首页'
                },
                {
                    path : '/test',
                    name : '首页'
                },
                {
                    path : '/test',
                    name : '首页'
                },
                {
                    path : '/test',
                    name : '首页'
                },
                {
                    path : '/test',
                    name : '首页'
                },
            ],
            curStatus : 0,
            lastStatus : 0,
        }
    },
    methods : {
        changePage(){},
    },
    components : {
        FootNav,
    }

}
</script>