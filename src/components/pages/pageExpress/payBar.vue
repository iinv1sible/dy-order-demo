<template>
  <div class="pb-container">
    <div class="pb-left" :style="{backgroundColor:isCartEmpty?'#828282':'#49453a'}">
      <div class="pb-icon">
        <div @click="onShowCart">
          <qicon size="44rpx" path="/static/icon/bag.png"></qicon>
        </div>
      </div>
      <div v-if="origin>0">
        <text class="pb-now-cost">¥{{now}}</text>
        <text class="pb-origin-cost">¥{{origin}}</text>
        <text class="pb-express-cost">另需配送费{{expressCost}}元</text>
      </div>
      <div v-else>
        <text class="pb-empty">未选购</text>
      </div>

      <div class="pb-item-count" v-if="!isCartEmpty">
        <bubble
          width="44rpx"
          height="44rpx"
          :text="cartItemList.length"
          backgroundColor="#E51C23"
          borderRadius="100%"
          fontColor="#fff"
          fontSize="24rpx"
        ></bubble>
      </div>
    </div>
    <div class="pb-right" :style="{backgroundColor:isCartEmpty?'#BEBEBE':'#d7ba79'}">
      <div @click="onPay">
        <text class="pb-ready-2-pay" :style="{color:isCartEmpty?'#fff':'#333333'}">去结算</text>
      </div>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
import bubble from "@/components/icon/bubble";
export default {
  props: ["origin", "now", "expressCost", "cartItemList"],
  components: {
    bubble,
    qicon
  },
  computed: {
    isCartEmpty() {
      return this.cartItemList.length <= 0;
    }
  },
  methods: {
    onShowCart() {
      if (!this.isCartEmpty) this.$emit("showCart");
    },
    onPay() {
      this.$emit("pay");
    }
  }
};
</script>

<style scoped>
.pb-container {
  width: 634rpx;
  height: 72rpx;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.pb-left {
  display: flex;
  align-items: center;
  border-radius: 40rpx 0 0 40rpx;
  position: relative;
  width: 428rpx;
  height: 72rpx;
}
.pb-right {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1px;
  border-radius: 0 40rpx 40rpx 0;
  width: 206rpx;
  height: 72rpx;
}
.pb-icon {
  margin-left: 22rpx;
}
.pb-now-cost {
  margin-left: 8rpx;
  color: #fff;
  font-size: 32rpx;
  font-weight: bold;
}
.pb-empty {
  margin-left: 16rpx;
  color: #fff;
  font-size: 32rpx;
  font-weight: bold;
}
.pb-origin-cost {
  margin-left: 8rpx;
  color: #ccc;
  font-size: 32rpx;
  font-weight: bold;
}
.pb-express-cost {
  margin-left: 8rpx;
  color: #bfbdbd;
  font-size: 24rpx;
}
.pb-ready-2-pay {
  font-size: 32rpx;
  font-weight: bold;
}
.pb-item-count {
  position: absolute;
  left: 52rpx;
  bottom: 58rpx;
}
</style>