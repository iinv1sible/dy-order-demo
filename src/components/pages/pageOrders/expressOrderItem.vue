<template>
  <div class="eoi-container">
    <div class="eoi-top">
      <div class="eoi-top-left">
        <div>
          <qicon size="30rpx" path="/static/icon/store.png"></qicon>
          <text class="eoi-top-left-name">{{shopName}}</text>
          <qicon size="30rpx" path="/static/icon/arrow-right.png"></qicon>
        </div>
        <div>{{time}}</div>
      </div>
      <div class="eoi-top-right">
        <text :style="{color:'red'}" v-if="status===1">预订单已提交，待付款</text>
        <text :style="{color:'#A5A5A5'}" v-if="status===2">待商家接单</text>
        <text :style="{color:'#A5A5A5'}" v-if="status===3">配送中</text>
        <text :style="{color:'#A5A5A5'}" v-if="status===4">已送达</text>
      </div>
    </div>
    <div class="eoi-center">
      <div class="eoi-center-left">
        <text>{{foodDetail}}</text>
      </div>
      <div class="eoi-center-right">
        <text>{{cost}}</text>
      </div>
    </div>
    <div class="eoi-bottom" v-if="status!==3">
      <div v-if="status===1">
        <text>请在{{payDeadline}}内完成支付</text>
        <simpleButton plain="plain" text="立即支付"></simpleButton>
      </div>
      <div v-if="status===2">
        <div>
          <simpleButton plain="plain" text="取消订单"></simpleButton>
        </div>
      </div>
      <div v-if="status===4">
        <div style="margin-right:14rpx">
          <simpleButton plain="plain" text="投诉反馈"></simpleButton>
        </div>
        <div>
          <simpleButton plain="plain" text="再来一单"></simpleButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import simpleButton from "@/components/button/simpleButton";
import qicon from "@/components/icon/qicon";
export default {
  props: [
    "id",
    "status",
    "shopName",
    "time",
    "foodDetail",
    "cost",
    "payDeadline"
  ],
  components: {
    simpleButton,
    qicon
  }
};
</script>

<style scoped>
.eoi-container {
  width: 708rpx;
  border-radius: 20rpx;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.eoi-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 672rpx;
  padding: 18rpx 0 16rpx 0;
  border-bottom: 1px solid #e8e8e8;
}
.eoi-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 672rpx;
  padding: 10rpx 4rpx 10rpx 42rpx;
  box-sizing: border-box;
}
.eoi-bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 672rpx;
  font-size: 24rpx;
  padding: 6rpx 0 24rpx 0;
}
.eoi-top-left {
  display: flex;
  flex-direction: column;
}
.eoi-top-left > div:first-child {
  display: flex;
  align-items: center;
}
.eoi-top-left > div:last-child {
  margin-left: 42rpx;
  font-size: 24rpx;
  color: #828282;
}
.eoi-center-left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 28rpx;
  color: #828282;
}
.eoi-center-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  font-size: 24rpx;
  color: #828282;
}
.eoi-bottom > div {
  display: flex;
  align-items: center;
}
.eoi-top-left-name {
  font-size: 28rpx;
  margin-left: 18rpx;
}
.eoi-top-right {
  font-size: 24rpx;
}
</style>