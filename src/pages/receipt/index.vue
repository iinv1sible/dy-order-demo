<template>
  <div>
    <div class="pr-no">
      <icon type="success"></icon>
      <div style="margin-left:20rpx">不需要发票</div>
    </div>
    <div class="pr-list-title">发票信息</div>
    <div class="pr-list">
      <div>
        <receiptItem></receiptItem>
      </div>
      <div>
        <receiptItem></receiptItem>
      </div>
      <div>
        <receiptItem></receiptItem>
      </div>
    </div>
    <div class="pr-add">
      <div>
        <qicon path="/static/icon/add.png" size="36rpx"></qicon>
        <text style="margin-left:20rpx">新增发票信息</text>
      </div>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
import receiptItem from "@/components/pages/pageReceipt/receiptItem";
export default {
  components: {
    qicon,
    receiptItem
  }
};
</script>

<style>
page {
  background-color: #f6f5f5;
}
</style>

<style scoped>
.pr-list-title {
  font-size: 28rpx;
  color: #bcbcbc;
  font-weight: bold;
  padding: 20rpx 20rpx;
}
.pr-no {
  background-color: #fff;
  padding: 30rpx;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-top: 20rpx;
}
.pr-list > div {
  margin-bottom: 6rpx;
}
.pr-add {
  padding: 30rpx 0;
  display: flex;
  justify-content: center;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 750rpx;
}
.pr-add > div {
  display: flex;
  align-items: center;
}
</style>