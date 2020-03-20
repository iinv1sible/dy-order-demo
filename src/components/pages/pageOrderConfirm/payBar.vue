<template>
  <div class="pb-container">
    <div class="pb-left">
      <text class="pb-cost">{{totalCostDesc}}</text>
      <!-- <text class="pb-seprator">|</text> -->
      <!-- <text class="pb-bonus">已优惠¥4.5</!-->
      -->
    </div>
    <div @click="handlerConfirm" class="pb-right">
      <text>确认支付</text>
    </div>
  </div>
</template>

<script>
export default {
  props: ["totalCostDesc"],
  methods: {
    handlerConfirm() {
      this.$emit("confirm");
    }
  }
};
</script>

<style scoped>
.pb-container {
  width: 634rpx;
  height: 72rpx;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.pb-left {
  display: flex;
  align-items: center;
  border-radius: 40rpx 0 0 40rpx;
  width: 428rpx;
  height: 72rpx;
  background-color: #333333;
}
.pb-right {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1px;
  border-radius: 0 40rpx 40rpx 0;
  width: 206rpx;
  height: 72rpx;
  background-color: #d7ba79;
  color: #333333;
  font-weight: bold;
  font-size: 36rpx;
}
.pb-cost {
  margin-left: 58rpx;
  font-size: 36rpx;
  color: #ffffff;
  font-weight: bold;
}
.pb-seprator {
  color: #f8f8f8;
  margin-left: 8rpx;
  margin-right: 8rpx;
}
.pb-bonus {
  font-size: 24rpx;
  color: #bfbdbd;
}
</style>