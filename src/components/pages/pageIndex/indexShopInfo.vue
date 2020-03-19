<template>
  <div class="index-shop-container">
    <div class="index-shop-title">
      <qicon size="90rpx" path="/static/icon/logo.png"></qicon>
      <div class="index-shop-name">
        <div class="index-shop-name-top">
          <text>{{shopInfo.title}}</text>
          <text @click="chooseShop" class="index-shop-change-shop">切换</text>
        </div>
        <text class="index-shop-title-dist">距您2.2km</text>
      </div>
      <div @click="handlerPhoneCall">
        <qicon size="56rpx" path="/static/icon/phone.png"></qicon>
      </div>
    </div>
    <div class="index-shop-detail">
      <div class="index-shop-official-developing">
        <developing></developing>
      </div>
      <div class="index-shop-official">
        <div class="index-shop-official-imgs-header" style="font-size:26rpx">
          <div style="color:#101010;font-weight:bold">官方图片</div>
          <div class="index-shop-official-imgs-header-arrow">
            <div style="color:#828282">23张</div>
            <qicon size="24rpx" path="/static/icon/arrow-right.png"></qicon>
          </div>
        </div>
        <div class="index-shop-official-imgs">
          <div v-for="item in officialFoodImgConfig.list" :key="text">
            <img-button-with-bottom-bar :src="item.src" :text="item.text"></img-button-with-bottom-bar>
          </div>
        </div>
      </div>
      <div @click="openLocation">
        <qinput label="门店地址" :content="shopInfo.address" :clickable="true"></qinput>
      </div>
      <div>
        <qinput label="营业时间" :content="shopInfo.busitime"></qinput>
      </div>
      <div>
        <qinput label="外送信息" :content="shopInfo.expressDesc"></qinput>
      </div>
      <div>
        <qinput label="优惠活动" :content="shopInfo.bonusDesc"></qinput>
      </div>
      <div @click="openLocation">
        <qinput label="停车信息" :content="shopInfo.parkDesc" :clickable="true"></qinput>
      </div>
      <div>
        <qinput label="支持开票" :content="shopInfo.ticketSupportDesc"></qinput>
      </div>
    </div>
  </div>
</template>

<script>
import developing from "@/components/button/developing";
import qinput from "@/components/qinput";
import qicon from "@/components/icon/qicon";
import imgButtonWithBottomBar from "@/components/button/imgButtonWithBottomBar";
import { mapGetters } from "vuex";
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
export default {
  components: {
    qinput,
    qicon,
    imgButtonWithBottomBar,
    developing
  },
  computed: {
    ...mapGetters("storeGlobal", {
      shopInfo: "getShopDetail"
    }),
    ...mapGetters("storePages/storePageIndex", {
      officialFoodImgConfig: "getOfficialFoodImgConfig"
    })
  },
  methods: {
    handlerPhoneCall() {
      native.makePhoneCall("0574-88132215");
    },
    chooseShop() {
      this.$emit("chooseShop");
    },
    openLocation() {
      native.openLocation({
        name: "鄞州科技信息孵化园",
        longitude: 121.55644978545894,
        latitude: 29.807972399025818
      });
    }
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
  position: relative;
}
.index-shop-official-developing {
  position: absolute;
  left: 150rpx;
}
.index-shop-detail > div {
  width: 620rpx;
  box-sizing: border-box;
  padding: 30rpx 0;
  border-bottom: 1px solid rgba(249, 249, 249, 1);
}
.index-shop-official-imgs {
  display: flex;
  align-items: center;
}
.index-shop-official-imgs > div {
  margin-right: 20rpx;
}
.index-shop-official-imgs > div:last-of-type {
  margin-right: 0;
}
.index-shop-official-imgs-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99%;
  padding-bottom: 24rpx;
}
.index-shop-official-imgs-header-arrow {
  display: flex;
  align-items: center;
}
.index-shop-official {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.3;
}
</style>