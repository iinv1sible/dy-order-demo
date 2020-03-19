<template>
  <div class="oi-container">
    <div class="oi-top">
      <div class="oi-top-left">
        <qicon size="30rpx" path="/static/icon/store.png"></qicon>
        <text class="oi-top-left-name">{{shopName}}</text>
        <qicon size="30rpx" path="/static/icon/arrow-right.png"></qicon>
      </div>
      <div class="oi-top-right">
        <text :style="{color:'red'}" v-if="status===1">预订单已提交，待付定金</text>
        <text :style="{color:'#A5A5A5'}" v-if="status===2">待到店</text>
        <text :style="{color:'#A5A5A5'}" v-if="status===3">已到店</text>
      </div>
    </div>
    <div class="oi-center">
      <div class="oi-center-left">
        <text>{{time}}</text>
        <text>{{personCount}}|{{room}}</text>
      </div>
      <div class="oi-center-right">
        <div>
          <text v-if="status===1">待付定金</text>
          <text v-if="status===2">已付定金</text>
          <text v-if="status===3">定金</text>
        </div>
        <text>{{reserveGold}}</text>
      </div>
    </div>
    <div class="oi-bottom">
      <div v-if="status===1">
        <text>请在{{reserveGoldDeadline}}内完成支付</text>
        <simpleButton color="#fff" backgroundColor="#bebebe" text="立即支付"></simpleButton>
      </div>
      <div v-if="status===2">
        <div style="margin-right:14rpx">
          <simpleButton color="#fff" backgroundColor="#bebebe" text="一键导航"></simpleButton>
        </div>
        <div>
          <simpleButton color="#fff" backgroundColor="#bebebe" text="取消预订"></simpleButton>
        </div>
      </div>
      <div v-if="status===3">
        <div style="margin-right:14rpx">
          <simpleButton color="#fff" backgroundColor="#bebebe" text="投诉反馈"></simpleButton>
        </div>
        <div>
          <simpleButton color="#fff" backgroundColor="#bebebe" text="再次预定"></simpleButton>
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
    "personCount",
    "room",
    "reserveGold",
    "reserveGoldDeadline"
  ],
  components: {
    simpleButton,
    qicon
  }
};
</script>

<style scoped>
.oi-container {
  width: 708rpx;
  height: 280rpx;
  border-radius: 20rpx;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.oi-top {
  display: flex;
  width: 672rpx;
  justify-content: space-between;
  align-items: center;
  padding: 18rpx 24rpx 36rpx 18rpx;
}
.oi-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 672rpx;
  margin-left: 18rpx;
  padding: 0 0 22rpx 0;
  border-bottom: 1px solid #e8e8e8;
}
.oi-bottom {
  width: 672rpx;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24rpx;
  padding: 12rpx 26rpx;
}
.oi-top-left {
  display: flex;
  align-items: center;
}
.oi-center-left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 28rpx;
  color: #828282;
}
.oi-center-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  font-size: 24rpx;
  color: #828282;
}
.oi-bottom > div {
  display: flex;
  align-items: center;
}
.oi-top-left-name {
  font-size: 28rpx;
  margin-left: 18rpx;
}
.oi-top-right {
  font-size: 24rpx;
}
</style>