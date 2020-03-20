<template>
  <div class="ef-container">
    <div class="ef-top" @click="handlerSelectAddress">
      <div class="ef-top-address">
        广州市越秀区东风中路268号
        1109-1110
      </div>
      <div class="ef-top-contact">
        <div>张小白</div>
        <div>181 0000 0000</div>
      </div>
      <div class="ef-top-arrow">
        <qicon path="/static/icon/arrow-right.png" size="40rpx"></qicon>
      </div>
    </div>
    <div @click="handlerSelectTime" class="ef-time">
      <div>送达时间</div>
      <div class="ef-time-detail">{{arriveTimeText}}</div>
      <div>
        <qicon path="/static/icon/arrow-right.png" size="40rpx"></qicon>
      </div>
    </div>
    <div class="ef-pay-method">
      <div>支付方式</div>
      <div>线上支付</div>
    </div>
    <div></div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["arriveTimeText"],
  components: {
    qicon
  },
  methods: {
    handlerSelectTime() {
      this.$emit("selectTime");
    },
    handlerSelectAddress() {
      this.$emit("selectAddress");
    }
  }
};
</script>

<style scoped>
.ef-container {
  width: 710rpx;
  height: 452rpx;
  background-color: #fff;
  border-radius: 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ef-top-address {
  font-size: 36rpx;
  color: #101010;
  font-weight: bold;
  width: 586rpx;
  line-height: 70rpx;
}
.ef-top-contact {
  color: #a6a4a4;
  font-size: 24rpx;
  display: flex;
  align-items: center;
  margin-top: 10rpx;
}
.ef-top-contact > div:nth-of-type(2) {
  margin-left: 22rpx;
}
.ef-top {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  border-bottom: 1px solid #f8f8f8;
  padding: 20rpx 0;
  width: 670rpx;
}
.ef-top-arrow {
  position: absolute;
  top: 50rpx;
  right: 0;
}
.ef-time {
  display: flex;
  align-content: center;
  border-bottom: 1px solid #f8f8f8;
  padding: 34rpx 0;
  width: 670rpx;
  font-weight: bold;
}
.ef-time > div:first-of-type {
  color: #101010;
  font-size: 28rpx;
}
.ef-time-detail {
  flex: auto;
  display: flex;
  justify-content: flex-end;
  color: #bfa260;
  font-size: 28rpx;
  margin-right: 6rpx;
}
.ef-pay-method {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 34rpx 0;
  width: 670rpx;
  font-weight: bold;
}
.ef-pay-method > div:first-of-type {
  color: #101010;
  font-size: 28rpx;
}
.ef-pay-method > div:last-of-type {
  font-size: 28rpx;
  color: #bfa260;
  margin-right: 44rpx;
}
</style>