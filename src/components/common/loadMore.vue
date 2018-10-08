<template>
    <div class="scroll-loadmore"
            @touchstart="touchStart($event)"
            @touchmove="touchMove($event)"
            >
        <section class="inner">
        <slot></slot>
        <!-- <footer class="load-more">
            <slot name="load-more">
            <span v-else>{{loadingText}}</span>
            </slot>
        </footer> -->
        </section>
    </div>
</template>
      
<script>
// import vueLoading from 'vue-loading-template';
export default {
    props: {
        offset: {
            type: Number,
            default: 30
        },
        onInfinite: {
            type: Function,
            default: undefined,
            require: false
        },
        loadingText: {
            type: String
        },
        loading: {
            type: Boolean,
            default: true
        },
        pageNum : {
            type : Number,
            default : 0
        },
        pageNo : {
            type : Boolean,
            default : false,
        }
    },
    data () {
        return {
            startY: 0,
            startScroll: 0,
            infiniteLoading: false
        };
    },
    methods: {
        touchStart (e) {
            this.startY = e.targetTouches[0].pageY;
            this.startScroll = this.$el.scrollTop || 0;
        },
        touchMove (e) {
            // if (this.$el.scrollTop > 0) {
            //     return;
            // }
            let diff = e.targetTouches[0].pageY - this.startY - this.startScroll;
            if(Math.floor(this.startScroll / 1800) <= this.pageNum){
                console.log('dfdfd')
                this.$emit('getChildren');
            }
            
            // if(this.pageNo){
            //     this.$emit('infinite')
            // }
            if (diff > 0) e.preventDefault();
        },
        infinite () {
            this.infiniteLoading = true;
            this.onInfinite(this.infiniteDone);
        },

        infiniteDone () {
            this.infiniteLoading = false;
        },

        // onScroll () {
        //     if (this.infiniteLoading) {
        //         return;
        //     }
        //     let outerHeight = this.$el.clientHeight;
        //     let innerHeight = this.$el.querySelector('.inner').clientHeight;
        //     let scrollTop = this.$el.scrollTop;
        //     let infiniteHeight = this.$el.querySelector('.load-more').clientHeight;
        //     let bottom = innerHeight - outerHeight - scrollTop;
        //     if (bottom < infiniteHeight) this.infinite();
        // }
    },
};
</script>
      
<style lang="scss" scoped>
.scroll-loadmore {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #f4f4f4;
}

.scroll-loadmore .inner {
    position: absolute;
    top: 0;
    width: 100%;
    transition-duration: 300ms;
}

.scroll-loadmore .load-more {
    height: 1rem;
    font-size: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>