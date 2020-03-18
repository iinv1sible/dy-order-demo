<template>
  <div>
    <div @click="handler2ProfileDetail" class="pp-profile">
      <user-profile-button></user-profile-button>
      <!-- <div class="pp-misc-round"></div> -->
    </div>
    <!-- <div class="pp-vip-card">
      <vip-card></vip-card>
    </div>-->
    <div class="pp-button-list">
      <div @click="handlerClickAdress">
        <arrow-icon-button iconPath="/static/icon/car.png" text="收餐地址"></arrow-icon-button>
      </div>
      <!-- <div>
        <arrow-icon-button iconPath="/static/icon/question.png" text="意见反馈"></arrow-icon-button>
      </div>-->
      <div @click="handlerPhoneCall">
        <arrow-icon-button iconPath="/static/icon/contact.png" text="联系我们"></arrow-icon-button>
      </div>
    </div>
  </div>
</template>

<script>
import vipCard from "@/components/pages/pageProfile/vipCard";
import arrowIconButton from "@/components/pages/pageProfile/arrowIconButton";
import userProfileButton from "@/components/button/userProfileButton";
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
import { mapActions } from "vuex";
export default {
  onReady() {
    this.actGetUserInfo();
  },
  components: {
    arrowIconButton,
    vipCard,
    userProfileButton
  },
  methods: {
    handlerPhoneCall() {
      native.makePhoneCall("0574-88132215");
    },
    handlerClickAdress() {
      native.nav2("/pages/address/main");
    },
    handler2ProfileDetail() {
      native.nav2("/pages/profileDetail/main");
    },
    ...mapActions("storeGlobal", ["actGetUserInfo"])
  }
};
</script>

<style>
page {
  background-color: #f9f9f9;
}
</style>

<style scoped>
.pp-button-list {
  /* margin-top: 80rpx; */
}
.pp-button-list > div {
  margin-top: 16rpx;
}
.pp-profile {
  background-color: #fff;
  padding: 42rpx 24rpx;
  position: relative;
  display: flex;
  justify-content: center;
}
.pp-misc-round {
  position: absolute;
  width: 730rpx;
  border-radius: 30rpx 30rpx 0 0;
  height: 30rpx;
  background-color: #f9f9f9;
  bottom: -10rpx;
}
.pp-vip-card {
  margin-top: -10rpx;
  z-index: 1;
  position: absolute;
}
</style>
