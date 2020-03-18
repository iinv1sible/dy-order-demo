<template>
  <div class="ibwbb-container">
    <image class="ibwbb-img" :src="src" />
    <div class="ibwbb-text">
      <div>{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["src", "text"]
};
</script>

<style scoped>
.ibwbb-container {
  width: 200rpx;
  height: 172rpx;
  border-radius: 10rpx;
  overflow: hidden;
  position: relative;
}
.ibwbb-img {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
}
.ibwbb-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 44rpx;
  color: #c8c8c8;
  font-size: 24rpx;
  display: flex;
  align-items: center;
  padding-left: 10rpx;
  background-color: rgba(0, 0, 0, 0.64);
}
</style>