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
          width="240rpx"
          height="70rpx"
          borderRadius="35rpx"
        ></simple-button>
      </div>
    </div>
    <div class="poc-method-form">
      <div v-if="method === 1">
        <express-form
          :arriveTimeText="selectedTreeNode.text"
          @selectTime="handlerSelectTime"
          @selectAddress="handlerSelectAddress"
        ></express-form>
      </div>
      <div v-if="method === 2">
        <self-form></self-form>
      </div>
    </div>
    <div class="poc-order-item-info">
      <order-item-info
        :shopName="shopDetail.title"
        :itemList="cartItemListWithCost.cartItemList"
        :packCostDesc="cartItemListWithCost.cartCost.packCostDesc"
        :expressCostDesc="cartItemListWithCost.cartCost.expressCostDesc"
        :bonusDesc="cartItemListWithCost.cartCost.bonusDesc"
        :totalCostDesc="cartItemListWithCost.cartCost.totalCostDesc"
      ></order-item-info>
    </div>
    <div class="poc-order-extra-info-form">
      <order-extra-info-form @showReceipt="handlerShowReceipt" @noteClick="handlerNoteClick"></order-extra-info-form>
    </div>
    <div class="poc-pay-bar">
      <pay-bar
        @confirm="handlerConfirm"
        :totalCostDesc="cartItemListWithCost.cartCost.totalCostDesc"
      ></pay-bar>
    </div>
    <div v-if="showTimePicker">
      <tree-picker
        @confirm="handlerConfirmSelectTime"
        @close="handlerCloseSelectTime"
        @selectSubNode="handlerSelectSubNode"
        :data="treePickerData"
      ></tree-picker>
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
import nativeMgr from "@/native/NativeMgr";
import treePicker from "@/components/treePicker/treePicker";
let native = nativeMgr.getNative();
export default {
  data() {
    return {
      showTimePicker: false
    };
  },
  components: {
    expressForm,
    selfForm,
    orderItemInfo,
    orderExtraInfoForm,
    simpleButton,
    payBar,
    treePicker
  },
  computed: {
    ...mapGetters("storePages/storePageOrderConfirm", {
      method: "getMethod",
      note: "getNote",
      treePickerData: "getTreePickerData",
      selectedTreeNode: "getSelectedTreeNode"
    }),
    ...mapGetters("storeGlobal", {
      cartItemListWithCost: "getCartItemListWithCost",
      shopDetail: "getShopDetail"
    })
  },
  methods: {
    handlerShowReceipt() {
      native.nav2("/pages/receipt/main");
    },
    handlerConfirmSelectTime() {
      this.showTimePicker = false;
    },
    handlerConfirm() {
      native.nav2("/pages/orderDetail/main");
    },
    handlerCloseSelectTime() {
      this.showTimePicker = false;
    },
    handlerSelectTime() {
      this.showTimePicker = true;
    },
    handlerSelectSubNode(index) {
      this.treePickerData.selectedSubNodeIndex = index;
      this.setTreePickerData(this.treePickerData);
    },
    handlerSelectAddress() {
      native.nav2("/pages/address/main");
    },
    handlerNoteClick() {
      this.setText(this.note);
      this.setCallback(text => {
        console.log("handlerNoteClick" + text);
        this.setNote(text);
      });
      native.nav2("/pages/orderNote/main");
    },
    handlerSelectMethod(method) {
      this.setMethod(method);
    },
    ...mapMutations("storePages/storePageNote", ["setCallback", "setText"]),
    ...mapMutations("storePages/storePageOrderConfirm", [
      "setMethod",
      "setNote",
      "setTreePickerData"
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
  left: 180rpx;
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