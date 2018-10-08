<template>
    <div class="test-mock">
        <load-more ref="testMock"
            @infinite="onInfinite"
            @getChildren="getChildren"
            :pageNo="pageNo"
            :loading-text="loadingText"
            :loading="loading"
            :pageNum="pageNum"
        >
            <div v-for="(item, key) in newsListShow">
                <news-cell
                :newsDate="item"
                :key="key"
                ></news-cell>
            </div>
        </load-more>
    </div>
</template>
<script>
import NewsCell from './newsCell';
import LoadMore from './../common/loadMore';

export default{
    name : 'testMock',
    data(){
        return {
            newsListShow: [],
            pageNum : 1,//页数
            num: '5',  // 一次显示多少条
            pageNo: false, // 开始页数
            loadingText: '',
            loading: false,
            downdata: [], // 上拉更多的数据存放数组
            returnCode: '',
            desc: '',
            modal: false,
            status : false,
        }
    },
    created() {
        this.setNewsApi();
    },
    mounted() {
        // console.log()
        
    },
    components : {
        NewsCell,
        LoadMore
    },
    methods : {
        setNewsApi: function() {
            this.$post('news/index', `{"pageNum":${this.pageNum}}`)
            .then(res => {
                console.log(res);
                this.newsListShow = res.articles;
            });
        },
        onInfinite (done) {
            this.loading = true;
            this.$post('news/index', `{"pageNum":${this.pageNum}}`)
            .then(res => {
                console.log(res);
                // this.newsListShow = res.articles;

                // this.returnCode = response.data.Head.ReturnCode;
                let arr = res.articles;
                this.newsListShow = this.newsListShow.concat(arr);
                this.pageNum += 1;
                this.status = false;
                if (this.num >= arr.length) {
                    this.loading = false;
                    this.loadingText = '没有更多了';
                    return;
                }
            });
        },
        getChildren(asd){
            if((this.$refs.testMock.$children.length - 20) / 10 >= this.pageNum - 1){
                this.pageNo = true;
                if(this.status){
                    return;
                }else{
                    this.status = true;
                    this.onInfinite();
                }
            }else{
                this.pageNo = false;
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>