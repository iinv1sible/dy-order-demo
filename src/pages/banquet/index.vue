<template>
  <div>
    <div v-if="showHotelReserveForm">
      <hotel-reserve-form @close="handlerCloseHotelReserveForm"></hotel-reserve-form>
    </div>
    <div class="pb-top">
      <qicon path="/static/icon/food.jpg"></qicon>
    </div>
    <div class="pb-content">
      <hotel-info @reserve="handlerReserve"></hotel-info>
      <div style="margin-top:30rpx" class="pb-hotel-area container-bg">
        <div class="pb-hotel-area-title">场地</div>
        <div class="pb-hotel-area-list">
          <div>
            <hotel-area @queryAvailable="handlerQueryAvailable"></hotel-area>
          </div>
          <div>
            <hotel-area @queryAvailable="handlerQueryAvailable"></hotel-area>
          </div>
          <div>
            <hotel-area @queryAvailable="handlerQueryAvailable"></hotel-area>
          </div>
        </div>
      </div>
      <div style="margin-top:30rpx" class="pb-hotel-menu container-bg">
        <div class="pb-hotel-menu-title">场地</div>
        <div class="pb-hotel-menu-list">
          <div>
            <hotel-menu></hotel-menu>
          </div>
          <div>
            <hotel-menu></hotel-menu>
          </div>
          <div>
            <hotel-menu></hotel-menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hotelInfo from "@/components/pages/pageBanquet/hotelInfo";
import hotelArea from "@/components/pages/pageBanquet/hotelArea";
import hotelMenu from "@/components/pages/pageBanquet/hotelMenu";
import qicon from "@/components/icon/qicon";
import hotelReserveForm from "@/components/pages/pageBanquet/hotelReserveForm";
import { mapMutations } from "vuex";
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
export default {
  data() {
    return {
      showHotelReserveForm: false
    };
  },
  components: {
    hotelInfo,
    hotelArea,
    hotelMenu,
    qicon,
    hotelReserveForm
  },
  methods: {
    handlerCloseHotelReserveForm() {
      this.showHotelReserveForm = false;
    },
    handlerReserve() {
      this.showHotelReserveForm = true;
    },
    handlerQueryAvailable() {
      this.setUrl("https://mobile.zhidianfan.com/yiding/html/meetTime.html");
      native.nav2("/pages/webView/main");
    },
    ...mapMutations("storePages/storePageWebView", ["setUrl"])
  }
};
</script>

<style scoped>
.pb-top {
  width: 750rpx;
  height: 382rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
}
.pb-content {
  margin: 0 26rpx;
  margin-top: -64rpx;
}
.pb-hotel-area-title {
  width: 644rpx;
  color: #101010;
  font-size: 32rpx;
  font-weight: bold;
  padding: 20rpx 0;
}
.pb-hotel-area-list > div {
  margin-bottom: 20rpx;
}
.pb-hotel-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pb-hotel-menu-title {
  width: 644rpx;
  color: #101010;
  font-size: 32rpx;
  font-weight: bold;
  padding: 20rpx 0;
}
.pb-hotel-menu-list > div {
  margin-bottom: 20rpx;
}
.pb-hotel-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-bg {
  background-color: #fff;
  border-radius: 40rpx;
}
</style>