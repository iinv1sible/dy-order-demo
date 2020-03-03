<template>
  <div class="pbd-container">
    <div class="pbd-content">
      <div class="pbd-title">
        <text>已选商品</text>
        <div>
          <qicon size="34rpx" path="/static/icon/trash.png"></qicon>
        </div>
        <text @click="onClear">清空</text>
      </div>
      <div class="pbd-list">
        <div class="pbd-list-item" v-for="cartItem in cartItemList" :key="id">
          <pay-bar-detail-item
            :name="cartItem.detail.nameText"
            :count="cartItem.count"
            :price="cartItem.detail.price"
            :id="cartItem.id"
            @minus="onMinus"
            @add="onAdd"
          ></pay-bar-detail-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import payBarDetailItem from "@/components/pages/pageExpress/payBarDetailItem";
import qicon from "@/components/icon/qicon";
export default {
  props: ["cartItemList"],
  components: {
    payBarDetailItem,
    qicon
  },
  methods: {
    onMinus(id) {
      this.$emit("minus", id);
    },
    onAdd(id) {
      this.$emit("add", id);
    },
    onClear() {
      this.$emit("clear");
    }
  },
  computed: {
    isCartEmpty() {
      return this.cartItemList.length <= 0;
    }
  }
};
</script>

<style scoped>
.pbd-container {
  width: 750rpx;
  height: 100%;
  background-color: rgba(91, 91, 91, 0.54);
  position: relative;
}
.pbd-content {
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  opacity: 1;
  padding-bottom: 142rpx;
}
.pbd-list-item {
  padding: 24rpx 0;
}
.pbd-title {
  padding: 24rpx 26rpx 24rpx 38rpx;
  color: #a6a4a4;
  font-size: 28rpx;
  display: flex;
  align-items: center;
}
.pbd-title > div {
  flex: auto;
  display: flex;
  justify-content: flex-end;
}
.pbd-title > text:last-of-type {
  margin-left: 10rpx;
}
</style>