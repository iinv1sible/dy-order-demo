<template>
  <div class="dp-container">
    <div class="dp-content">
      <div class="dp-title">
        <div style="margin-right:10rpx">商家预订台弹出外送订单通知，点击</div>
        <div @click="handlerConfirm">
          <simple-button
            text="确定"
            color="#fff"
            fontSize="28rpx"
            border="1px solid rgba(187,187,187,1)"
            backgroundColor="#EE3A0E"
            width="106rpx"
            height="44rpx"
            borderRadius="8rpx"
          ></simple-button>
        </div>
        <div style="margin-left:10rpx">接受订单。</div>
      </div>
      <div class="dp-gif">
        <qicon></qicon>
      </div>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
import simpleButton from "@/components/button/simpleButton";
export default {
  components: {
    simpleButton
  },
  methods: {
    handlerConfirm() {
      this.$emit("confirm");
    }
  }
};
</script>

<style scoped>
.dp-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.dp-content {
  width: 750rpx;
  height: 532rpx;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  font-size: 28rpx;
}
.dp-title {
  width: 750rpx;
  display: flex;
  justify-content: center;
  padding: 20rpx 0;
  color: #fff;
}
</style>