<template>
  <div class="oip-container">
    <simple-button
      text="包装费"
      color="#333333"
      fontSize="24rpx"
      backgroundColor="rgba(51, 51, 51, 0.12)"
      border="1px solid rgba(51, 51, 51, 0.19)"
      width="106rpx"
      height="42rpx"
      borderRadius="0"
    ></simple-button>
    <text class="oip-name">餐盒</text>
    <text class="oip-cost">{{cost}}</text>
  </div>
</template>
<script>
import simpleButton from "@/components/button/simpleButton";
export default {
  props: ["cost"],
  components: {
    simpleButton
  }
};
</script>

<style>
.oip-container {
  display: flex;
  align-items: center;
  position: relative;
}
.oip-cost {
  font-size: 32rpx;
  color: #020202;
  font-weight: bold;
  position: absolute;
  right: 0;
}
.oip-name {
  font-size: 28rpx;
  color: #101010;
  margin-left: 16rpx;
}
</style>