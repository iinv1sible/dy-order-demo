<template>
  <div class="ri-container">
    <div class="ri-left">
      <icon type="success"></icon>
    </div>
    <div class="ri-center">
      <div class="ri-center-top">
        <div>
          <simple-button
            text="单位"
            color="#61B3FE"
            fontSize="24rpx"
            plain="plain"
            border="1px solid #61B3FE"
            backgroundColor="#fff"
            width="50rpx"
            height="30rpx"
            borderRadius="10rpx"
          ></simple-button>
        </div>
        <div style="margin-left:6rpx">宁波鼎壹信息科技有限公司</div>
      </div>
      <div class="ri-center-bottom">111111111111111111111</div>
    </div>
    <div class="ri-right">
      <qicon path="/static/icon/edit.png" size="40rpx"></qicon>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
import simpleButton from "@/components/button/simpleButton";
export default {
  components: {
    qicon,
    simpleButton
  }
};
</script>

<style scoped>
.ri-container {
  width: 750rpx;
  background-color: #fff;
  padding: 30rpx 30rpx;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ri-center {
  display: flex;
  flex-direction: column;
  margin-left: -60rpx;
}
.ri-center-top {
  display: flex;
  font-weight: bold;
  align-items: center;
}
.ri-center-bottom {
  margin-top: 10rpx;
  font-size: 28rpx;
  color: #b0b0b0;
}
</style>