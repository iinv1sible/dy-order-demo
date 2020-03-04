<template>
  <div class="poc-container">
    <div class="poc-header">
      <div @click="handlerSelectMethod(1)" class="poc-header-express">
        <simple-button
          text="酒店配送"
          :color="method===1?'#D7BA79':'#fff'"
          fontSize="28rpx"
          :backgroundColor="method===1?'#fff':'#BFA260'"
          width="220rpx"
          height="70rpx"
          borderRadius="35rpx"
        ></simple-button>
      </div>
      <div @click="handlerSelectMethod(2)" class="poc-header-self">
        <simple-button
          text="到店自提"
          :color="method===2?'#D7BA79':'#fff'"
          fontSize="28rpx"
          :backgroundColor="method===2?'#fff':'#BFA260'"
          width="220rpx"
          height="70rpx"
          borderRadius="35rpx"
        ></simple-button>
      </div>
    </div>
    <div class="poc-method-form">
      <div v-if="method === 1">
        <express-form></express-form>
      </div>
      <div v-if="method === 2">
        <self-form></self-form>
      </div>
    </div>
    <div class="poc-order-item-info">
      <order-item-info></order-item-info>
    </div>
    <div class="poc-order-extra-info-form">
      <order-extra-info-form></order-extra-info-form>
    </div>
    <div class="poc-pay-bar">
      <pay-bar></pay-bar>
    </div>
  </div>
</template>

<script>
import expressForm from "@/components/pages/pageOrderDetail/expressForm";
import selfForm from "@/components/pages/pageOrderDetail/selfForm";
import orderItemInfo from "@/components/pages/pageOrderDetail/orderItemInfo";
import orderExtraInfoForm from "@/components/pages/pageOrderDetail/orderExtraInfoForm";
import simpleButton from "@/components/button/simpleButton";
import payBar from "@/components/pages/pageOrderConfirm/payBar";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    expressForm,
    selfForm,
    orderItemInfo,
    orderExtraInfoForm,
    simpleButton,
    payBar
  },
  computed: {
    ...mapGetters("storePages/storePageOrderConfirm", {
      method: "getMethod"
    })
  },
  methods: {
    handlerSelectMethod(method) {
      this.setMethod(method);
    },
    ...mapMutations("storePages/storePageOrderConfirm", ["setMethod"])
  }
};
</script>
<style>
page {
  background-color: #f9f9f9;
}
</style>
<style scoped>
.poc-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.poc-header {
  width: 750rpx;
  height: 222rpx;
  background-color: #d7ba79;
  position: relative;
}
.poc-header-express {
  position: absolute;
  top: 44rpx;
  left: 20rpx;
  z-index: 2;
}
.poc-header-self {
  position: absolute;
  top: 44rpx;
  left: 182rpx;
  z-index: 1;
}
.poc-method-form {
  margin-top: -74rpx;
  position: relative;
  z-index: 3;
}
.poc-order-item-info {
  margin-top: 16rpx;
}
.poc-order-extra-info-form {
  margin-top: 16rpx;
  margin-bottom: 212rpx;
}
.poc-pay-bar {
  position: fixed;
  bottom: 32rpx;
}
</style>