<template>
  <div class="vc-container">
    <div class="vc-main">
      <div class="vc-shop-name">苏园会员卡</div>
      <div class="vc-type">
        <text>主卡</text>
      </div>
      <div class="vc-no">
        <text>VIP</text>
        <text>NO.189 5343</text>
      </div>
      <div class="vc-qrcode">
        <qicon size="44rpx" path="/static/icon/qrcode.png"></qicon>
      </div>
    </div>
    <div class="vc-bottom">
      <div class="vc-gold">
        <text>0.00</text>
        <text>余额</text>
      </div>
      <div class="vc-score">
        <text>0</text>
        <text>积分</text>
      </div>
      <div class="vc-ticket">
        <text>0</text>
        <text>券</text>
      </div>
      <div class="vc-bottom-line1"></div>
      <div class="vc-bottom-line2"></div>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["shopName", "no", "type", "bg", "gold", "score", "ticket"],
  components: {
    qicon
  }
};
</script>
<style scoped>
.vc-main {
  background-color: #333333;
  width: 712rpx;
  height: 314rpx;
  border-radius: 20rpx 20rpx 0 0;
  position: relative;
}
.vc-shop-name {
  color: #d7ba79;
  font-size: 32rpx;
  font-weight: bold;
  position: absolute;
  left: 28rpx;
  top: 20rpx;
}
.vc-type {
  width: 94rpx;
  height: 44rpx;
  border-radius: 24rpx 0 0 24rpx;
  background-color: #d7ba79;
  border: 1px solid #d7ba79;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20rpx;
  right: 2rpx;
  box-sizing: border-box;
  padding-left: 5rpx;
}
.vc-type > text {
  font-size: 28rpx;
  color: #101010;
  font-weight: bold;
}
.vc-no {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  color: #d7ba79;
  left: 28rpx;
  top: 126rpx;
}
.vc-no > text:first-child {
  font-size: 28rpx;
}
.vc-no > text:last-child {
  font-weight: bold;
  font-size: 36rpx;
}
.vc-qrcode {
  position: absolute;
  top: 136rpx;
  right: 30rpx;
}
.vc-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vc-bottom {
  width: 100%;
  display: flex;
  height: 100rpx;
  background-color: #fff;
  position: relative;
}
.vc-gold,
.vc-score,
.vc-ticket {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250rpx;
}
.vc-gold > text:first-child,
.vc-score > text:first-child,
.vc-ticket > text:first-child {
  font-size: 36rpx;
  color: #101010;
}
.vc-gold > text:last-child,
.vc-score > text:last-child,
.vc-ticket > text:last-child {
  font-size: 24rpx;
  color: #101010;
  margin-top: -5rpx;
}
.vc-bottom-line1 {
  width: 1px;
  height: 50rpx;
  background-color: #e8e8e8;
  position: absolute;
  top: 24rpx;
  left: 250rpx;
}
.vc-bottom-line2 {
  width: 1px;
  height: 50rpx;
  background-color: #e8e8e8;
  position: absolute;
  top: 24rpx;
  right: 250rpx;
}
</style>
