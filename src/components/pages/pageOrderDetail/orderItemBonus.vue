<template>
  <div class="oi-container">
    <simple-button
      text="优惠"
      color="#D0878E"
      fontSize="24rpx"
      backgroundColor="#FDF5F2"
      width="106rpx"
      height="42rpx"
      borderRadius="0"
    ></simple-button>
    <text class="oi-name">店铺满减优惠</text>
    <text class="oi-bonus">{{bonus}}</text>
  </div>
</template>

<script>
import simpleButton from "@/components/button/simpleButton";
export default {
  props: ["bonus"],
  components: {
    simpleButton
  }
};
</script>

<style>
.oi-container {
  display: flex;
  align-items: center;
  position: relative;
}
.oi-name {
  color: #101010;
  font-size: 28rpx;
  margin-left: 16rpx;
}
.oi-bonus {
  font-size: 32rpx;
  color: #df0902;
  font-weight: bold;
  position: absolute;
  right: 0;
}
</style>