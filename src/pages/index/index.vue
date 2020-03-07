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
        <index-shop-info @chooseShop="handlerChooseShop"></index-shop-info>
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
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  // lifes
  onShow() {
    native.setNavigationBarTitle(this.navigationBarTitle);
    this.actGetLocation({
      complete: () => {
        //尝试获取位置之后 不管怎么样都会刷新一下店铺信息 因为肯定需要一个店铺 不可能什么都不显示
        this.actGetShop();
      },
      fail: async () => {
        //但是位置获取失败之后会锁住视图 给予提示 并且引导设置或者手动选择
        let res = await native.showModal({
          title: "提示",
          content: "没有获取到你的位置",
          confirmText: "去设置",
          cancelText: "手动选择"
        });
        if (res.confirm) {
          //去设置
          let res = await native.openSetting();
        } else {
          //手动选择
          native.nav2("/pages/address/main");
        }
      }
    });
  },
  mounted() {
    this.setLoaded(true);
  },
  ////////////////////////
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
    handlerChooseShop() {
      console.log("handlerChooseShop");
      native.nav2("/pages/shopList/main");
    },
    ...mapMutations("storePages/storePageIndex", ["setLoaded"]),
    ...mapMutations("storeGlobal", ["setCurrentShop2Main"]),
    ...mapActions("storeGlobal", ["actGetLocation", "actGetShop"])
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
