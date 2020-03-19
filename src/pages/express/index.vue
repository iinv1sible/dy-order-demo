<template>
  <div style="width:750rpx;overflow-x:hidden" class="pe-container">
    <div>
      <navbar-search @back="handlerBack" text="输入菜品名称搜索"></navbar-search>
    </div>
    <div>
      <shop-detail
        :iconPath="shopDetail.logo"
        :name="shopDetail.title"
        :busitime="shopDetail.busitime"
        :cost="shopDetail.expressDesc"
      ></shop-detail>
    </div>
    <div
      class="pe-food-detail"
      :style="{top:(defaultNavbarHeight * 2 + 252) + 'rpx',right:0,bottom:0,left:0}"
    >
      <food-list
        :categories="categories"
        :foodList="foodListByCurrentSelectedCategory"
        :selectedCategory="selectedCategory"
        @select="handlerSelect"
        @foodSelect="handlerFoodSelect"
        @add="handlerAdd"
      ></food-list>
    </div>
    <div class="pe-pay-bar">
      <pay-bar
        @pay="handlerPay"
        @showCart="handlerShowCart"
        :origin="cartCost.origin"
        :now="cartCost.now"
        :expressCost="cartCost.expressCost"
        :cartItemList="cartItemList"
      ></pay-bar>
    </div>
    <div class="pe-pay-bar-detail" v-show="showPayDetail">
      <pay-bar-detail
        @clear="handlerClear"
        @minus="handlerMinus"
        @add="handlerAdd"
        :cartItemList="cartItemList"
      ></pay-bar-detail>
    </div>
    <div class="pe-food-item-detail" v-show="showItemDetail">
      <food-item-detail
        @close="handlerCloseFoodItemDetail"
        @add="handlerAdd"
        :name="currentItemInDetailShow.nameText"
        :iconPath="currentItemInDetailShow.iconPath"
        :price="currentItemInDetailShow.price"
        :suit="currentItemInDetailShow.suitItems"
        :detail="currentItemInDetailShow.infoText"
        :id="currentItemInDetailShow.id"
      ></food-item-detail>
    </div>
  </div>
</template>

<script>
import navbarSearch from "@/components/pages/pageExpress/navbarSearch";
import shopDetail from "@/components/pages/pageExpress/shopDetail";
import foodList from "@/components/pages/pageExpress/foodList";
import payBar from "@/components/pages/pageExpress/payBar";
import payBarDetail from "@/components/pages/pageExpress/payBarDetail";
import foodItemDetail from "@/components/pages/pageExpress/foodItemDetail";
import { mapGetters, mapMutations, mapActions } from "vuex";
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
export default {
  // lifes

  //////////////////////
  components: {
    navbarSearch,
    shopDetail,
    foodList,
    payBar,
    payBarDetail,
    foodItemDetail
  },
  computed: {
    ...mapGetters("storePages/storePageExpress", {
      shopDetail: "getShopDetail",
      categories: "getCategories",
      cartItemList: "getCartItemList",
      foodListByCurrentSelectedCategory: "getFoodListByCurrentSelectedCategory",
      selectedCategory: "getSelectedCategory",
      currentItemInDetailShow: "getCurrentItemInDetailShow",
      showPayDetail: "getShowPayDetail",
      showItemDetail: "getShowItemDetail"
    }),
    ...mapGetters("storeGlobal", {
      cartCost: "getCartCost"
    }),
    ...mapGetters("storeSysInfo", {
      defaultNavbarHeight: "getDefaultNavbarHeight",
      defaultNavbarContentHeight: "getDefaultNavbarContentHeight",
      defaultNavbarStatusHeight: "getDefaultNavbarStatusHeight",
      capsuleButtonInfo: "getCapsuleButtonInfo"
    })
  },
  methods: {
    handlerBack() {
      native.navigateBack();
    },
    handlerSelect(id) {
      this.setSelectedCatId(id);
    },
    handlerFoodSelect(foodId) {
      this.setCurrentItemInDetailShow(foodId);
      this.setShowItemDetail(true);
    },
    handlerCloseFoodItemDetail() {
      this.setShowItemDetail(false);
    },
    handlerAdd(id) {
      this.actAddItem2Cart({
        id,
        success: () => {},
        fail: ({ msg }) => {
          native.showToast({ msg });
        }
      });
    },
    handlerMinus(id) {
      this.actRemoveItemFromCart({
        id,
        success: ({ msg, isEmpty }) => {
          if (isEmpty) {
            this.setShowPayDetail(false);
          }
        },
        fail: ({ msg }) => {
          native.showToast({ msg });
        }
      });
    },
    handlerClear() {
      this.actRemoveAllFromCart();
    },
    handlerShowCart() {
      this.setShowPayDetail(!this.showPayDetail);
    },
    handlerPay() {
      native.nav2("/pages/orderConfirm/main");
    },
    ...mapActions("storePages/storePageExpress", [
      "actAddItem2Cart",
      "actRemoveItemFromCart",
      "actRemoveAllFromCart"
    ]),
    ...mapMutations("storePages/storePageExpress", [
      "setSelectedCatId",
      "setCurrentItemInDetailShow",
      "setShowItemDetail",
      "setShowPayDetail"
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
.pe-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.pe-food-detail {
  position: fixed;
}
.pe-pay-bar {
  position: fixed;
  bottom: 50rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
}
.pe-pay-bar-detail {
  position: fixed;
  bottom: 0px;
  z-index: 1;
  height: 100%;
}
.pe-food-item-detail {
  position: fixed;
  bottom: 0px;
  z-index: 1;
  height: 100%;
}
</style>
