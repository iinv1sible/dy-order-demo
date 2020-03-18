<template>
  <cover-view class="ap-container">
    <cover-view class="ap-top">
      <cover-view class="ap-title">
        <cover-view>安心卡</cover-view>
      </cover-view>
      <cover-view class="ap-msg">尊敬的张先生，</cover-view>
      <cover-view style="margin-top:26rpx" class="ap-msg">为保证您的用餐安全皆可追踪，疫情期间，我们将为您的每次用餐准备安心卡，您的就餐</cover-view>
      <cover-view class="ap-order">2020-03-04 午餐 柳浪闻莺</cover-view>
      <cover-view class="ap-msg">安心卡已更新，请查看。</cover-view>
      <cover-view class="ap-record-time">记录时间：2020年3月4日</cover-view>
      <cover-view @click="hanlderShowAnxinDetail" class="ap-btn">
        <cover-view>立即查看</cover-view>
      </cover-view>
    </cover-view>
    <cover-view class="ap-bottom">
      <cover-image @click="handlerClose" class="ap-close" src="/static/icon/close-white.png"></cover-image>
    </cover-view>
  </cover-view>
</template>

<script>
import simpleButton from "@/components/button/simpleButton";
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
export default {
  components: {
    simpleButton
  },
  methods: {
    hanlderShowAnxinDetail() {
      native.nav2("/pages/anxin/main");
    },
    handlerClose() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.ap-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ap-top {
  width: 472rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20rpx;
  background-color: #fff;
}
.ap-title {
  color: #333333;
  font-size: 36rpx;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 20rpx 0;
}
.ap-msg {
  color: #333333;
  font-size: 24rpx;
  font-weight: bold;
  width: 434rpx;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-line;
  line-height: 40rpx;
}
.ap-order {
  color: #159d4b;
  font-size: 28rpx;
  font-weight: bold;
  width: 434rpx;
  padding: 30rpx 0;
}
.ap-record-time {
  font-size: 24rpx;
  color: #828282;
  margin-top: 50rpx;
}
.ap-btn {
  width: 400rpx;
  height: 72rpx;
  border-radius: 40rpx;
  background-color: #159d4b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  color: #fff;
  font-weight: bold;
  margin-top: 20rpx;
  margin-bottom: 30rpx;
}
.ap-close {
  width: 50rpx;
  height: 50rpx;
  bottom: -50rpx;
}
.ap-bottom {
  height: 100rpx;
  width: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
  justify-content: center;
}
</style>