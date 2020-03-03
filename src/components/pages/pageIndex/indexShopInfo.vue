<template>
  <div class="index-shop-container">
    <div class="index-shop-title">
      <qicon size="90rpx" path="/static/icon/store.png"></qicon>
      <div class="index-shop-name">
        <div class="index-shop-name-top">
          <text>苏园黄河路店</text>
          <text class="index-shop-change-shop">切换</text>
        </div>
        <text class="index-shop-title-dist">距您2.2km</text>
      </div>
      <qicon size="36rpx" path="/static/icon/phone.png"></qicon>
    </div>
    <div class="index-shop-detail">
      <div>
        <qinput label="门店地址" :content="shopInfo.address" :clickable="true"></qinput>
      </div>
      <div>
        <qinput label="营业时间" :content="shopInfo.busitime"></qinput>
      </div>
      <div>
        <qinput label="外送信息" :content="shopInfo.expressInfo"></qinput>
      </div>
      <div>
        <qinput label="优惠活动" :content="shopInfo.bonus"></qinput>
      </div>
      <div>
        <qinput label="停车信息" :content="shopInfo.park" :clickable="true"></qinput>
      </div>
      <div>
        <qinput label="支持开票" :content="shopInfo.ticketSupport"></qinput>
      </div>
    </div>
  </div>
</template>

<script>
import qinput from "@/components/qinput";
import qicon from "@/components/icon/qicon";
import { mapGetters } from "vuex";
export default {
  components: {
    qinput,
    qicon
  },
  computed: {
    ...mapGetters("storePages/storePageIndex", {
      shopInfo: "getShopInfo"
    })
  }
};
</script>

<style scoped>
.index-shop-container {
  margin: 0 25rpx;
}
.index-shop-title {
  display: flex;
  align-items: center;
  border-radius: 40rpx 40rpx 0 0;
  background-color: #fff;
  height: 140rpx;
  padding: 0 45rpx;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(249, 249, 249, 1);
  border: 1px solid #f6f6f6;
}
.index-shop-name {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: auto;
  margin-left: 40rpx;
}
.index-shop-name-top {
  display: flex;
  align-items: center;
}
.index-shop-name-top > text:first-child {
  font-size: 32rpx;
  font-weight: bold;
}
.index-shop-change-shop {
  width: 60rpx;
  height: 36rpx;
  font-size: 24rpx;
  border: 1px solid #aaa;
  border-radius: 10rpx;
  text-align: center;
  margin-left: 20rpx;
}
.index-shop-title-dist {
  font-size: 24rpx;
  color: rgba(200, 200, 200, 1);
}
.index-shop-detail {
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #f6f6f6;
}
.index-shop-detail > div {
  width: 620rpx;
  box-sizing: border-box;
  padding: 30rpx 0;
  border-bottom: 1px solid rgba(249, 249, 249, 1);
}
</style>