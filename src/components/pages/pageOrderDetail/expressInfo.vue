<template>
  <div class="ei-container">
    <div class="ei-title">配送信息</div>
    <div class="ei-time">
      <text>送达时间</text>
      <text>尽快送达</text>
    </div>
    <div class="ei-address">
      <text>收货地址</text>
      <div>
        <text>越秀区东风中路268号1109-1110</text>
        <text>张小白 181 0000 0000</text>
      </div>
    </div>
    <div class="ei-method">
      <text>配送方式</text>
      <text>商家自送</text>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ei-container {
  width: 710rpx;
  border-radius: 20rpx;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28rpx;
}
.ei-container > div {
  width: 674rpx;
  padding: 28rpx 0;
  border-bottom: 1px solid rgba(248, 248, 248, 1);
}
.ei-container > div:last-of-type {
  border-bottom: 0;
}
.ei-title {
  color: #101010;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.ei-time {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ei-time > text:first-of-type {
  color: #5b5b5b;
}
.ei-time > text:last-of-type {
  color: #a6a4a4;
}
.ei-address {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.ei-address > text:first-of-type {
  color: #5b5b5b;
}
.ei-address > div:first-of-type {
  color: #a6a4a4;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.ei-method {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ei-method > text:first-of-type {
  color: #5b5b5b;
}
.ei-method > text:last-of-type {
  color: #a6a4a4;
}
</style>