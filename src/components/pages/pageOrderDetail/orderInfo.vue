<template>
  <div class="oi-container">
    <div class="oi-title">订单信息</div>
    <div class="oi-id">
      <text>订单号</text>
      <div>
        <text>2115 9090 1771 6318 384</text>
        <text>|</text>
        <text>复制</text>
      </div>
    </div>
    <div class="oi-method">
      <text>支付方式</text>
      <text>在线支付</text>
    </div>
    <div class="oi-gen-time">
      <text>下单时间</text>
      <text>2019-09-21 12:10</text>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.oi-container {
  width: 710rpx;
  border-radius: 20rpx;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28rpx;
}
.oi-container > div {
  width: 674rpx;
  padding: 28rpx 0;
  border-bottom: 1px solid rgba(248, 248, 248, 1);
}
.oi-container > div:last-of-type {
  border-bottom: 0;
}
.oi-title {
  color: #101010;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.oi-id {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.oi-id > text:first-of-type {
  color: #5b5b5b;
}
.oi-id > div {
  color: #a6a4a4;
  display: flex;
  align-items: center;
}
.oi-id > div > text:nth-of-type(2) {
  margin-left: 14rpx;
}
.oi-id > div > text:nth-of-type(3) {
  margin-left: 14rpx;
}
.oi-method {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.oi-method > text:first-of-type {
  color: #5b5b5b;
}
.oi-method > text:last-of-type {
  color: #a6a4a4;
}
.oi-gen-time {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.oi-gen-time > text:first-of-type {
  color: #5b5b5b;
}
.oi-gen-time > text:last-of-type {
  color: #a6a4a4;
}
</style>