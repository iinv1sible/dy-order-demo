<template>
  <div v-show="loaded">
    <div>
      <vr></vr>
    </div>
    <div class="index-header">
      <map-icon-button :text="headerLocationText"></map-icon-button>
      <!-- <bottomRoundedSwiper :imgList="swiperImgList"></bottomRoundedSwiper> -->
    </div>
    <div class="index-shop-container">
      <div class="index-shop-header">
        <rounded-button-bar
          width="706rpx"
          borderRadius="40rpx"
          padding="26rpx 0"
          :list="roundedButtonBarData.list"
          @click="onClick"
        ></rounded-button-bar>
      </div>
      <div class="index-shop-info">
        <index-shop-info @chooseShop="handlerChooseShop"></index-shop-info>
      </div>
      <div class="index-shop-activity">
        <div class="index-shop-activity-title">- 精彩活动 -</div>
        <div class="index-shop-activity-container">
          <div v-for="activity in activities" :key="id">
            <activity :path="activity.path" :title="activity.title" :valid="activity.valid"></activity>
          </div>
        </div>
      </div>
      <div class="bottom-load-more">
        <div>没有更多了</div>
      </div>
    </div>
    <cover-view v-if="showAnxinPopup" class="pi-anxin-popup">
      <anxin-popup @close="handlerClose"></anxin-popup>
    </cover-view>
    <div @click="handlerScroll2Top" v-if="showScroll2TopButton" class="pi-scroll-2-top">
      <qicon size="60rpx" path="/static/icon/scroll-2-top.png"></qicon>
    </div>
  </div>
</template>

<script>
import mapIconButton from "@/components/button/mapIconButton";
import bottomRoundedSwiper from "@/components/bottomRoundedSwiper";
import roundedButtonBar from "@/components/roundedButtonBar";
import nativeMgr from "@/native/NativeMgr";
import indexShopInfo from "@/components/pages/pageIndex/indexShopInfo";
import vr from "@/components/pages/pageIndex/vr";
import { mapGetters, mapMutations, mapActions } from "vuex";
import activity from "@/components/pages/pageIndex/activity";
let native = nativeMgr.getNative();
let wxPano = requirePlugin("wxPano");
import anxinPopup from "@/components/popup/anxinPopup";
import qicon from "@/components/icon/qicon";

export default {
  onPageScroll(e) {
    this.pageScrollTop = e.scrollTop;
    this.showScroll2TopButton = this.pageScrollTop > 266;
  },
  // lifes
  onShow() {
    native.setNavigationBarTitle(this.navigationBarTitle);
    //尝试获取位置之后 不管怎么样都会刷新一下店铺信息 因为肯定需要一个店铺 不可能什么都不显示
    this.actGetShop();
    this.actGetLocation({
      complete: () => {
        this.actGetShop();
      },
      fail: async () => {
        //但是位置获取失败之后会锁住视图 给予提示 并且引导设置或者手动选择
        let res = await native.showModal({
          title: "提示",
          content: "没有获取到你的位置",
          confirmText: "去设置",
          showCancel: false
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
    console.log("index mounted");
  },
  ////////////////////////
  data() {
    return {
      showAnxinPopup: true,
      pageScrollTop: 0,
      showScroll2TopButton: false
    };
  },
  methods: {
    // handlerHeader() {
    //   console.log("click handlerHeader");
    //   native.nav2("/pages/vr/main");
    // },
    handlerScroll2Top() {
      native.pageScrollTo(0);
    },
    handlerClose() {
      this.showAnxinPopup = false;
    },
    onClick(id) {
      console.log(id);
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
    anxinPopup,
    mapIconButton,
    bottomRoundedSwiper,
    roundedButtonBar,
    indexShopInfo,
    vr,
    activity,
    qicon
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
    }),
    ...mapGetters("storeGlobal", {
      activities: "getActivities"
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
  background-color: #fff;
}
.index-shop-header {
  margin: 24rpx 0 24rpx 22rpx;
}
.index-shop-container {
  position: relative;
}
.index-shop-activity-title {
  color: #101010;
  font-size: 32rpx;
  font-weight: bold;
  padding: 24rpx 0;
}
.index-shop-activity {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.index-shop-activity-container > div {
  margin-top: 32rpx;
}
.index-shop-activity-container > div:first-of-type {
  margin-top: 0;
}
.bottom-load-more {
  color: #e1e1e1;
  font-size: 28rpx;
  width: 140rpx;
  width: 750rpx;
  display: flex;
  justify-content: center;
  padding: 30rpx 0;
}
.pi-anxin-popup {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.64);
  display: flex;
  justify-content: center;
  align-items: center;
}
.pi-scroll-2-top {
  position: fixed;
  right: 48rpx;
  bottom: 54rpx;
}
</style>
