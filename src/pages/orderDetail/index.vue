<template>
  <div class="pod-container">
    <div class="pod-header">
      <div class="pod-header-msg">
        <text>{{ORDER_STATUS_DESC_MAP[order.status]}}</text>
        <text>></text>
      </div>
    </div>
    <div class="pod-order-item-info">
      <order-item-info
        :shopName="order.shopDetail.title"
        :itemList="order.itemList"
        :packCostDesc="order.packCostDesc"
        :expressCostDesc="order.expressCostDesc"
        :bonusDesc="order.bonusDesc"
        :totalCostDesc="order.totalCostDesc"
        :showCancel="true"
      ></order-item-info>
    </div>
    <div v-if="isExpress" class="pod-express-info">
      <express-info
        :time="order.expressInfo.time"
        :address="order.expressInfo.address.address || ''"
        :door="order.expressInfo.address.door || ''"
        :receiverName="order.expressInfo.address.receiver.name || ''"
        :receiverContact="order.expressInfo.address.receiver.contact || ''"
        :who="expressWho"
      ></express-info>
    </div>
    <div class="pod-order-info">
      <order-info :no="order.no" :createTime="order.createTime"></order-info>
    </div>
    <div class="pod-order-extra-info">
      <order-extra-info :note="order.note"></order-extra-info>
    </div>
    <div v-if="isWaitPay" class="pod-pay-bar">
      <pay-bar :totalCostDesc="order.totalCostDesc"></pay-bar>
    </div>
    <demo-pay v-if="showDemoPay" @confirm="handlerConfirmDemoPay"></demo-pay>
  </div>
</template>

<script>
import expressInfo from "@/components/pages/pageOrderDetail/expressInfo";
import orderItemInfo from "@/components/pages/pageOrderDetail/orderItemInfo";
import orderInfo from "@/components/pages/pageOrderDetail/orderInfo";
import payBar from "@/components/pages/pageOrderConfirm/payBar";
import orderExtraInfo from "@/components/pages/pageOrderDetail/orderExtraInfo";
import { mapGetters, mapMutations, mapActions } from "vuex";
import qicon from "@/components/icon/qicon";
import config from "@/static/config";
import demoPay from "@/components/pages/pageOrderDetail/demoPay";
export default {
  components: {
    demoPay,
    orderItemInfo,
    expressInfo,
    orderInfo,
    payBar,
    orderExtraInfo,
    qicon
  },
  data() {
    return {
      showDemoPay: false,
      ORDER_STATUS_DESC_MAP: config.ORDER_STATUS_DESC_MAP
    };
  },
  onShow() {
    this.actGetAddresses();
    setTimeout(() => {
      this.showDemoPay = true;
    }, 2000);
  },
  computed: {
    isExpress() {
      return this.order.expressMethod === config.ORDER_EXPRESS_METHOD.EXPRESS;
    },
    expressInfo() {
      return this.order.expressInfo;
    },
    expressWho() {
      return config.ORDER_EXPRESS_WHO_DESC_MAP[this.order.expressInfo.who];
    },
    isWaitPay() {
      return this.order.status == config.ORDER_STATUS.WAIT_PAY;
    },
    ...mapGetters("storePages/storePageOrderDetail", {
      order: "getOrder"
    })
  },
  methods: {
    handlerConfirmDemoPay() {
      this.showDemoPay = false;
      this.actSetExpressOrderStatus({
        id: this.order.id,
        status: config.ORDER_STATUS.WAIT_ACCEPT
      });
    },
    ...mapActions("storeGlobal", [
      "actGetAddresses",
      "actSetExpressOrderStatus"
    ])
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