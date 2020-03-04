<template>
  <div class="pod-container">
    <div class="pod-header">
      <div class="pod-header-msg">
        <text>{{ORDER_STATUS_DESC_MAP[order.status]}}</text>
        <text>></text>
      </div>
    </div>
    <div class="pod-order-item-info">
      <order-item-info></order-item-info>
    </div>
    <div class="pod-express-info">
      <express-info></express-info>
    </div>
    <div class="pod-order-info">
      <order-info></order-info>
    </div>
    <div class="pod-order-extra-info">
      <order-extra-info></order-extra-info>
    </div>
    <div class="pod-pay-bar">
      <pay-bar></pay-bar>
    </div>
  </div>
</template>

<script>
import expressInfo from "@/components/pages/pageOrderDetail/expressInfo";
import orderItemInfo from "@/components/pages/pageOrderDetail/orderItemInfo";
import orderInfo from "@/components/pages/pageOrderDetail/orderInfo";
import payBar from "@/components/pages/pageOrderConfirm/payBar";
import orderExtraInfo from "@/components/pages/pageOrderDetail/orderExtraInfo";
import { mapGetters, mapMutations } from "vuex";
import qicon from "@/components/icon/qicon";
import config from "@/static/config";
export default {
  components: {
    orderItemInfo,
    expressInfo,
    orderInfo,
    payBar,
    orderExtraInfo,
    qicon
  },
  data() {
    return {
      ORDER_STATUS_DESC_MAP: config.ORDER_STATUS_DESC_MAP
    };
  },
  computed: {
    ...mapGetters("storePages/storePageOrderDetail", {
      order: "getOrder"
    })
  }
};
</script>
<style>
page {
  background-color: #f9f9f9;
}
</style>
<style scoped>
.pod-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pod-header-msg {
  font-size: 48rpx;
  color: #ffffff;
  font-weight: bold;
  position: absolute;
  left: 30rpx;
  top: 36rpx;
  display: flex;
  align-items: center;
}
.pod-header {
  width: 750rpx;
  height: 222rpx;
  background-color: #d7ba79;
  position: relative;
}
.pod-order-item-info {
  margin-top: -74rpx;
  z-index: 3;
}
.pod-express-info {
  margin-top: 16rpx;
}
.pod-order-info {
  margin-top: 16rpx;
}
.pod-order-extra-info {
  margin-top: 16rpx;
  margin-bottom: 212rpx;
}
.pod-pay-bar {
  position: fixed;
  bottom: 32rpx;
}
</style>