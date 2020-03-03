<template>
  <div class="fid-container">
    <div class="fid-content">
      <div class="fid-title">
        <text>{{name}}</text>
        <div @click="onClose">
          <qicon size="44rpx" path="/static/icon/close.png"></qicon>
        </div>
      </div>
      <div class="fid-image">
        <qicon size="100%" :path="iconPath"></qicon>
      </div>
      <div class="fid-bottom-info">
        <div class="fid-bottom-info-price">
          <text>¥{{price}}</text>
          <div @click="onAdd">
            <qicon size="40rpx" path="/static/icon/add.png"></qicon>
          </div>
        </div>
        <div class="fid-bottom-info-suit" v-if="suit.length > 0">
          <text>套餐菜品</text>
          <div v-for="item in suit" :key="id">
            <simple-button
              :text="item.nameText"
              color="#D7BA79"
              fontSize="24rpx"
              plain="plain"
              border="1px solid #D7BA79"
              width="150rpx"
              height="42rpx"
              borderRadius="8rpx"
            ></simple-button>
          </div>
        </div>
        <div class="fid-bottom-info-detail">
          <text>菜品说明：{{detail}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
import simpleButton from "@/components/button/simpleButton";
export default {
  props: ["name", "iconPath", "price", "suit", "detail", "id"],
  components: {
    qicon,
    simpleButton
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
    onAdd() {
      this.$emit("add", this.id);
      this.onClose();
    }
  }
};
</script>

<style scoped>
.fid-container {
  width: 750rpx;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.58);
  position: relative;
}
.fid-content {
  position: absolute;
  bottom: 0;
  width: 750rpx;
  background-color: #fff;
  border-radius: 42rpx 42rpx 0 0;
  display: flex;
  flex-direction: column;
  padding: 28rpx 44rpx 154rpx 44rpx;
  box-sizing: border-box;
}
.fid-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 36rpx;
  font-weight: bold;
  color: #101010;
  width: 100%;
}
.fid-image {
  width: 100%;
  height: 670rpx;
  border-radius: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.fid-bottom-info-price {
  font-size: 54rpx;
  color: #df0902;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fid-bottom-info-suit {
  display: flex;
  align-items: center;
  margin-bottom: 10rpx;
}
.fid-bottom-info-suit > text {
  font-size: 28rpx;
  color: #101010;
}
.fid-bottom-info-suit > div {
  margin-left: 10rpx;
}
.fid-bottom-info-suit > div:first-of-type {
  margin-left: 22rpx;
}
.fid-bottom-info-detail {
  display: flex;
  align-items: center;
  color: #101010;
  font-size: 28rpx;
}
</style>