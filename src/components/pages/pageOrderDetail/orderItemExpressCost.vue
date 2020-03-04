<template>
  <div class="oiec-container">
    <simple-button
      text="配送费"
      color="#FFFFFF "
      fontSize="24rpx"
      backgroundColor="#333333"
      width="106rpx"
      height="42rpx"
      borderRadius="0"
    ></simple-button>
    <text class="oiec-cost">{{cost}}</text>
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
.oiec-container {
  display: flex;
  align-items: center;
  position: relative;
}
.oiec-cost {
  font-size: 32rpx;
  color: #020202;
  font-weight: bold;
  position: absolute;
  right: 0;
}
</style>