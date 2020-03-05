<template>
  <div class="oii-container">
    <div class="oii-top">{{shopName}}</div>
    <div class="oii-center">
      <div v-for="item in itemList" :key="id">
        <order-item
          :iconPath="item.detail.iconPath"
          :name="item.detail.nameText"
          :count="item.countDesc"
          :cost="item.costDesc"
        ></order-item>
      </div>
      <div v-if="packCostDesc">
        <order-item-pack :cost="packCostDesc"></order-item-pack>
      </div>
      <div v-if="expressCostDesc">
        <order-item-express-cost :cost="expressCostDesc"></order-item-express-cost>
      </div>
      <div v-if="bonusDesc">
        <order-item-bonus :bonus="bonusDesc"></order-item-bonus>
      </div>
    </div>
    <div class="oii-bottom">
      <div>
        <icon-button
          iconPath="/static/icon/phone02.png"
          iconSize="32rpx"
          label="联系商家"
          fontSize="26rpx"
          fontColor="#D7BA79"
          containerWidth="166rpx"
          containerHeight="36rpx"
          space="6rpx"
        ></icon-button>
      </div>
      <div class="oii-bottom-cost">
        <text>应付</text>
        <text>{{totalCostDesc}}</text>
      </div>
    </div>
    <div class="oii-cancel-order">
      <simple-button
        text="取消订单"
        color="#101010"
        fontSize="24rpx"
        plain="plain"
        border="1px solid #E8E8E8"
        width="108rpx"
        height="44rpx"
        borderRadius="10rpx"
      ></simple-button>
    </div>
  </div>
</template>

<script>
import orderItem from "@/components/pages/pageOrderDetail/orderItem";
import orderItemBonus from "@/components/pages/pageOrderDetail/orderItemBonus";
import orderItemPack from "@/components/pages/pageOrderDetail/orderItemPack";
import orderItemExpressCost from "@/components/pages/pageOrderDetail/orderItemExpressCost";
import iconButton from "@/components/button/iconButton";
import simpleButton from "@/components/button/simpleButton";
export default {
  props: [
    "shopName",
    "itemList",
    "packCostDesc",
    "expressCostDesc",
    "bonusDesc",
    "totalCostDesc"
  ],
  components: {
    orderItem,
    orderItemBonus,
    orderItemPack,
    orderItemExpressCost,
    iconButton,
    simpleButton
  }
};
</script>

<style scoped>
.oii-container {
  width: 710rpx;
  border-radius: 20rpx;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.oii-top {
  color: #101010;
  font-size: 28rpx;
  font-weight: bold;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 32rpx 0 20rpx 0;
  width: 674rpx;
  border-bottom: 1px solid rgba(248, 248, 248, 1);
}
.oii-center {
  width: 674rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.oii-center > div {
  padding: 10rpx 0;
  width: 100%;
}
.oii-center > div:last-of-type {
  border-bottom: 1px solid rgba(248, 248, 248, 1);
}
.oii-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 674rpx;
  padding: 16rpx 0;
}
.oii-bottom-cost {
  display: flex;
  align-items: center;
}
.oii-bottom-cost > text:first-of-type {
  color: #101010;
  font-size: 24rpx;
  margin-right: 6rpx;
}
.oii-bottom-cost > text:last-of-type {
  color: #020202;
  size: 36rpx;
  font-weight: bold;
}
.oii-cancel-order {
  margin-bottom: 16rpx;
  display: flex;
  justify-content: flex-end;
  width: 674rpx;
}
</style>