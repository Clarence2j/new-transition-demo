<template>
  <div id="app">
    <transition name="white-bg" @after-leave="leaveFn">
      <div class="white" v-show="showWhite"></div>
    </transition>
    <transition name="yellow-bg">
      <div class="yellow" v-show="showYellow">
        <div class="yellow-con">
          路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式路上看见对方离开时间段逢狼时刻京东方老师看见对方是劳动纠纷老师肯定积分老师肯定积分路上看见对方绿色空间的福利卡时间段法律是看得见付老师看见方式
        </div>
      </div>
    </transition>
    <div class="con" ref="box">
      <ul 
        :style="{height : arr.length * 130 + 'px'}"
        
      >
        <li 
          v-for="(item , index) in arr" 
          :key="index"
          :style="{transform : isOneClick ? 'translateY(0)' : curIndex == index ? 'translateY(-' + toTop + 'px)' : curIndex > index ? 'translateY(-1400px)' : 'translateY(1400px)',transition: 'all .8s cubic-bezier(' + (0.9 - index * 15 / 100) + ', 0, ' + (0.9 - index * 15 / 100) + ', 1)'}"
          @click="clickFn(index)"
        >
          {{item.name}}---{{index}}
        </li>
      </ul>
    </div>
    <div class="bottom" @click="showWhiteFn"></div>
  </div>
</template>


<script>
export default {
  name: 'App',
  data(){
    return {
      showWhite : true,
      arr : [
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        },
        {
          name : 'aaa'
        }
      ],
      curIndex : -1,
      isOneClick : true,
      toTop : 20,
      showYellow : false
    }
  },
  methods : {
    showWhiteFn(){
      this.showWhite = !this.showWhite;
    },
    clickFn(index){
      //获取应滚动距离
      this.toTop = 130 * index - this.$refs['box'].scrollTop - 20;
      this.isOneClick = !this.isOneClick;
      this.showWhite = !this.showWhite;

      this.curIndex = index;
    },
    leaveFn(){
      this.showYellow = !this.showYellow;
    }
  }
}
</script>

<style>
body,html{
  height : 100%;
  width : 100%;
}
.yellow{
  width : 100%;
  height : 700px;
  position : relative;
  overflow: hidden;
}
.yellow-con{
  width : 100%;
  height : 80%;
  position : absolute;
  top : 20%;
  left : 0;
  background : yellow;
}
.yellow-bg-enter{
  height : 0;
}
.yellow-bg-enter-to{
  height : 700px;
}
@keyframes yellowEnter {
  0%{
    height : 0%;
  }
  100%{
    height : 80%;
  }
}
.yellow-bg-enter-active{
  animation : yellowEnter 0.5s ease;
}
.yellow-bg-leave{
  height : 80%;
}
.yellow-bg-leave-to{
  height : 0;
}
@keyframes yellowLeave {
  0%{
    height : 80%;
  }
  100%{
    height : 0%;
  }
}
.yellow-bg-leave-active{
  animation : yellowLeave 0.5s ease;
}
#app{
  width : 100%;
  height : 100%;
  position : absolute;
  top : 0;
  left : 0;
  background : blue;
}
.con{
  width : 100%;
  height : 100%;
  position : absolute;
  top : 0;
  left : 0;
  z-index: 10;
  overflow-y : scroll;
}
li{
  width : 100%;
  height : 120px;
  background : #fff;
  border : 1px solid #ccc;
  border-radius : 10px;
  margin-bottom : 10px;
  transition : all 1s ease-in-out;
}
.bottom{
  width : 100%;
  height : 10%;
  position : absolute;
  bottom : 0;
  left : 0;
  background : #ccc;
}
.white{
  width : 100%;
  height : 80%;
  position : absolute;
  bottom : 10%;
  left : 0;
  background : #fff;
}
.white-bg-enter{
  height : 0%;
}
.white-bg-enter-to{
  height : 80%;
}
@keyframes whiteEnter {
  0%{
    height : 0%;
  }
  100%{
    height : 80%;
  }
}
.white-bg-enter-active{
  animation : whiteEnter 0.5s ease;
}
.white-bg-leave{
  height : 80%;
}
.white-bg-leave-to{
  height : 0;
}
@keyframes whiteLeave {
  0%{
    height : 80%;
  }
  100%{
    height : 0%;
  }
}
.white-bg-leave-active{
  animation : whiteLeave 0.5s ease;
}
</style>
