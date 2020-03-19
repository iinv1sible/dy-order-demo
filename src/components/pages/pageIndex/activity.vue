<template>
  <div class="a-container">
    <div class="a-img">
      <qicon size="640rpx" :path="path"></qicon>
    </div>
    <div class="a-title">{{title}}</div>
    <!-- <div class="a-valid">{{valid}}</div> -->
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["path", "title", "valid"],
  components: {
    qicon
  }
};
</script>

<style scoped>
.a-container {
  display: flex;
  flex-direction: column;
  width: 640rpx;
  position: relative;
}
.a-title {
  color: #101010;
  font-size: 28rpx;
  font-weight: bold;
  margin-top: 14rpx;
}
.a-valid {
  color: #bebebe;
  font-size: 24rpx;
  margin-top: 20rpx;
}
</style>