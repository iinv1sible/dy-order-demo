<template>
  <div class="oeif-container">
    <div class="oeif-note">
      <text>订单备注</text>
      <div>
        <text>口味、几份餐具、偏好</text>
        <qicon path="/static/icon/arrow-right.png" size="36rpx"></qicon>
      </div>
    </div>
    <div class="oeif-receipt">
      <text>发票信息</text>
      <div>
        <text>抬头|税号</text>
        <qicon path="/static/icon/arrow-right.png" size="36rpx"></qicon>
      </div>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  components: {
    qicon
  }
};
</script>

<style scoped>
.oeif-container {
  width: 710rpx;
  border-radius: 20rpx;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28rpx;
}
.oeif-container > div {
  width: 674rpx;
  padding: 28rpx 0;
  border-bottom: 1px solid rgba(248, 248, 248, 1);
}
.oeif-note {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.oeif-note > text:first-of-type {
  font-weight: bold;
  color: #101010;
}
.oeif-note > div:first-of-type {
  display: flex;
  align-items: center;
  color: #a6a4a4;
}
.oeif-receipt {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.oeif-receipt > text:first-of-type {
  font-weight: bold;
  color: #101010;
}
.oeif-receipt > div:first-of-type {
  display: flex;
  align-items: center;
  color: #a6a4a4;
}
</style>