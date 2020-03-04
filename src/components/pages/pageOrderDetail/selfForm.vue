<template>
  <div class="sf-container">
    <div class="sf-top">
      <div class="sf-top-address">预留电话</div>
      <div class="sf-top-contact">
        <div>张小白</div>
        <div>|</div>
        <div>181 0000 0000</div>
      </div>
    </div>
    <div class="sf-time">
      <div>自提时间</div>
      <div class="sf-time-detail">立即自取（15:19）</div>
      <div>
        <qicon path="/static/icon/arrow-right.png" size="40rpx"></qicon>
      </div>
    </div>
    <div class="sf-pay-method">
      <div>支付方式</div>
      <div>线上支付</div>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  components: {
    qicon
  }
};
</script>

<style scoped>
.sf-container {
  width: 710rpx;
  background-color: #fff;
  border-radius: 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sf-top-address {
  font-size: 36rpx;
  color: #101010;
  font-weight: bold;
  width: 586rpx;
  line-height: 70rpx;
}
.sf-top-contact {
  color: #a6a4a4;
  font-size: 24rpx;
  display: flex;
  align-items: center;
  margin-top: 10rpx;
  justify-content: space-between;
}
.sf-top-contact > div:nth-of-type(2) {
  margin-left: 22rpx;
}
.sf-top-contact > div:nth-of-type(3) {
  margin-right: 44rpx;
}
.sf-top {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  border-bottom: 1px solid #f8f8f8;
  padding: 20rpx 0;
  width: 670rpx;
}
.sf-top-arrow {
  position: absolute;
  top: 50rpx;
  right: 0;
}
.sf-time {
  display: flex;
  align-content: center;
  border-bottom: 1px solid #f8f8f8;
  padding: 34rpx 0;
  width: 670rpx;
  font-weight: bold;
}
.sf-time > div:first-of-type {
  color: #101010;
  font-size: 28rpx;
}
.sf-time-detail {
  flex: auto;
  display: flex;
  justify-content: flex-end;
  color: #bfa260;
  font-size: 28rpx;
}
.sf-pay-method {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 34rpx 0;
  width: 670rpx;
  font-weight: bold;
}
.sf-pay-method > div:first-of-type {
  color: #101010;
  font-size: 28rpx;
}
.sf-pay-method > div:last-of-type {
  font-size: 28rpx;
  color: #bfa260;
  margin-right: 44rpx;
}
</style>