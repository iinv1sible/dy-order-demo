<template>
  <div v-if="loaded">
    <div class="index-header">
      <div class="index-header-swiper">
        <bottomRoundedSwiper :imgList="swiperImgList"></bottomRoundedSwiper>
      </div>
      <div class="index-header-button">
        <map-icon-button :text="headerLocationText"></map-icon-button>
      </div>
    </div>
    <div class="index-shop-container">
      <div class="index-shop-header">
        <rounded-button-bar
          width="706rpx"
          height="114rpx"
          borderRadius="40rpx"
          :list="roundedButtonBarData.list"
          @click="onClick"
        ></rounded-button-bar>
      </div>
      <div class="index-shop-info">
        <index-shop-info></index-shop-info>
      </div>
    </div>
  </div>
</template>

<script>
import mapIconButton from "@/components/button/mapIconButton";
import bottomRoundedSwiper from "@/components/bottomRoundedSwiper";
import roundedButtonBar from "@/components/roundedButtonBar";
import nativeMgr from "@/native/NativeMgr";
import indexShopInfo from "@/components/pages/pageIndex/indexShopInfo";
let native = nativeMgr.getNative();
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    onClick(id) {
      if (id === 2) {
        //跳转到订餐外送页面
        native.nav2("/pages/express/main");
      }
    },
    ...mapMutations("storePages/storePageIndex", ["setLoaded"])
  },
  components: {
    mapIconButton,
    bottomRoundedSwiper,
    roundedButtonBar,
    indexShopInfo
  },
  computed: {
    ...mapGetters("storeSysStyles", {
      sysStyle: "getCurrentSysStyle"
    }),
    ...mapGetters("storePages/storePageIndex", {
      swiperImgList: "getSwiperImgList",
      headerLocationText: "getHeaderLocationText",
      navigationBarTitle: "getNavigationBarTitle",
      roundedButtonBarData: "getRoundedButtonBarData",
      loaded: "getLoaded"
    })
  },
  onShow() {
    native.setNavigationBarTitle(this.navigationBarTitle);
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
.index-header {
  position: relative;
}
.index-header-button {
  position: absolute;
  top: 12rpx;
  left: 12rpx;
}
.index-shop-header {
  position: absolute;
  display: flex;
  justify-content: center;
  top: -140rpx;
  left: 22rpx;
}
.index-shop-container {
  position: relative;
  margin-top: 100rpx;
}
</style>
