<template>
  <div class="mib-container">
    <qicon size="32rpx" path="/static/icon/map-white.png"></qicon>
    <text class="mib-text">{{text}}</text>
    <qicon size="32rpx" path="/static/icon/arrow-right-white.png"></qicon>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["text"],
  components: {
    qicon
  }
};
</script>

<style scoped>
.mib-container {
  display: flex;
  width: 580rpx;
  align-items: center;
  color: #fff;
}

.mib-text {
  flex: auto;
  font-size: 28rpx;
  margin-left: 20rpx;
}
</style>