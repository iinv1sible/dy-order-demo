<template>
  <div class="po-container" v-if="loaded">
    <div class="po-navbar">
      <navbar-tab
        :navbarHeight="navbarHeight + 'px'"
        :navbarContentHeight="navbarContentHeight + 'px'"
        :navbarStatusHeight="navbarStatusHeight + 'px'"
        :tabList="navbarTabConfig.tabList"
        :selectedId="navbarTabConfig.selectedId"
        fontSize="16px"
        iconSize="30px"
        lineSpace="6px"
        @select="handlerSelect"
      ></navbar-tab>
    </div>
    <div class="po-search">
      <search-input></search-input>
    </div>
    <div v-if="selectedId === 1" class="po-order-list">
      <div v-for="order in reserveOrderList" :key="id">
        <reserve-order-item
          :id="order.id"
          :status="order.status"
          :shopName="order.shopName"
          :time="order.time"
          :personCount="order.personCount"
          :room="order.room"
          :reserveGold="order.reserveGold"
          :reserveGoldDeadline="order.reserveGoldDeadline"
        ></reserve-order-item>
      </div>
    </div>
    <div v-if="selectedId === 2" class="po-order-list">
      <div v-for="order in expressOrderList" :key="id">
        <express-order-item
          @detail="handlerShowDetail(order.id)"
          @pay="handlerPay(order.id)"
          @again="handlerAgain(order.id)"
          :id="order.id"
          :status="order.status"
          :shopName="order.shopDetail.title"
          :foodDetailDesc="order.foodDetailDesc"
          :foodNumDesc="order.foodNumDesc"
          :time="order.time"
          :cost="order.totalCostDesc"
        ></express-order-item>
      </div>
    </div>
  </div>
</template>

<script>
import navbarTab from "@/components/navbar/navbarTab";
import { mapGetters, mapActions, mapMutations } from "vuex";
import reserveOrderItem from "@/components/pages/pageOrders/reserveOrderItem";
import expressOrderItem from "@/components/pages/pageOrders/expressOrderItem";
import searchInput from "@/components/pages/pageOrders/searchInput";
export default {
  computed: {
    ...mapGetters("storePages/storePageOrders", {
      reserveOrderList: "getReserveOrderList",
      expressOrderList: "getExpressOrderList",
      orderList: "getOrderList",
      navbarTabConfig: "getNavbarTabConfig",
      navbarHeight: "getNavbarHeight",
      navbarContentHeight: "getNavbarContentHeight",
      navbarStatusHeight: "getNavbarStatusHeight",
      selectedId: "getSelectedId",
      loaded: "getLoaded"
    })
  },
  components: {
    reserveOrderItem,
    navbarTab,
    searchInput,
    expressOrderItem
  },
  methods: {
    handlerSelect(id) {
      this.actSelectTab(id);
    },
    handlerShowDetail(id) {
      console.log("handlerShowDetail");
      this.actShowExpressOrderDetail(id);
    },
    handlerPay() {
      console.log("handlerPay");
    },
    handlerAgain() {
      console.log("handlerAgain");
    },
    ...mapActions("storePages/storePageOrders", [
      "actSelectTab",
      "actShowExpressOrderDetail"
    ]),
    ...mapMutations("storePages/storePageOrders", ["setLoaded"])
  },
  mounted() {
    this.setLoaded(true);
  }
};
</script>

<style>
page {
  background-color: #f9f9f9;
}
</style>

<style scoped>
.po-order-list {
  margin: 0 22rpx;
  margin-top: 26rpx;
}
.po-order-list > div {
  margin-bottom: 18rpx;
}
.po-search {
  background-color: #fff;
  padding: 10rpx 22rpx 20rpx 22rpx;
}
</style>
