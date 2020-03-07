<template>
  <div>
    <div class="psl-search">
      <div class="psl-search-input">
        <icon-input
          iconPath="/static/icon/search.png"
          iconSize="30rpx"
          placeholder="搜索酒店"
          fontSize="24rpx"
          borderRadius="30rpx"
          space="6rpx"
          padding="10rpx 30rpx"
          width="708rpx"
          height="50rpx"
          inputHeight="30rpx"
        ></icon-input>
      </div>
      <div class="psl-confirm" @click="handlerConfirm">
        <simple-button
          text="确定"
          color="#101010"
          fontSize="24rpx"
          plain="plain"
          border="1px solid #ccc"
          backgroundColor="#fff"
          width="80rpx"
          height="50rpx"
          borderRadius="10rpx"
        ></simple-button>
      </div>
    </div>
    <div class="psl-map">
      <map id="map01" :markers="markers"></map>
    </div>
    <div class="psl-list">
      <div v-for="shop in shopList" :key="id">
        <shop-item
          :title="shop.title"
          :isInBusi="shop.isInBusi"
          :isInExpressRange="shop.isInExpressRange"
          :distDesc="shop.distDesc"
          :address="shop.address"
          :expressDesc="shop.expressDesc"
          :selected="shop.id == selectedShopId"
          :id="shop.id"
          @select="handlerSelect"
          @phone="handlerPhone"
        ></shop-item>
      </div>
    </div>
  </div>
</template>

<script>
import iconInput from "@/components/input/iconInput";
import shopItem from "@/components/pages/pageShopList/shopItem";
import simpleButton from "@/components/button/simpleButton";
import { mapGetters, mapActions, mapMutations } from "vuex";
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
let mapContext = null;
export default {
  onLoad() {
    mapContext = native.createMapContext("map01");
  },
  //lifes
  onShow() {
    this.actGetShopList({
      complete: () => {
        this.setMarker();
      }
    });
  },
  components: {
    iconInput,
    shopItem,
    simpleButton
  },
  computed: {
    markers() {
      return [
        {
          id: 1,
          longitude: 0,
          latitude: 0
        }
      ];
    },
    ...mapGetters("storePages/storePageShopList", {
      shopList: "getShopList",
      selectedShopId: "getSelectedShopId",
      selectedShop: "getSelectedShop"
    })
  },
  methods: {
    setMarker() {
      let shop = this.selectedShop;
      native.moveToLocation(mapContext, {
        longitude: shop.longitude,
        latitude: shop.latitude
      });
      native.translateMarker(mapContext, {
        markerId: 1,
        longitude: shop.longitude,
        latitude: shop.latitude
      });
    },
    handlerSelect(id) {
      this.setSelectedShopId(id);
      this.setMarker();
    },
    handlerPhone(id) {},
    handlerConfirm() {
      this.setCurrentShopId(this.selectedShopId);
      native.navigateBack();
    },
    ...mapActions("storePages/storePageShopList", ["actGetShopList"]),
    ...mapMutations("storePages/storePageShopList", ["setSelectedShopId"]),
    ...mapMutations("storeGlobal", ["setCurrentShopId"])
  }
};
</script>

<style>
page {
  background-color: #f9f9f9;
}
</style>

<style scoped>
.psl-search {
  padding: 20rpx 24rpx;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.psl-search-input {
  flex: auto;
}
.psl-map {
  width: 750rpx;
  height: 400rpx;
}
.psl-map > map {
  width: 100%;
  height: 100%;
}
.psl-list > div {
  margin-bottom: 10rpx;
}
.psl-confirm {
  margin-left: 20rpx;
}
</style>