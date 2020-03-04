<template>
  <div class="oei-container">
    <div class="oei-title">备注信息</div>
    <div class="oei-detail">
      <text>这里填写备注信息</text>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.oei-container {
  width: 710rpx;
  border-radius: 20rpx;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28rpx;
}
.oei-container > div {
  width: 674rpx;
  padding: 28rpx 0;
  border-bottom: 1px solid rgba(248, 248, 248, 1);
}
.oei-container > div:last-of-type {
  border-bottom: 0;
}
.oei-detail {
  display: flex;
  align-items: center;
  color: #a6a4a4;
}
</style>