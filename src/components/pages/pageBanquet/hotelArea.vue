<template>
  <div class="flex-h-between container-bg ha-container" style="width:644rpx">
    <div class="area-left img-item">
      <qicon path="/static/icon/food.jpg"></qicon>
    </div>
    <div class="area-center flex-v">
      <div class="font-title">玫瑰厅</div>
      <div class="font-desc">35-42桌</div>
      <div class="font-desc">无立柱 层高7.5m</div>
    </div>
    <div class="area-right" @click="handlerQueryAvailable">
      <simple-button
        text="查询档期"
        color="#333333"
        fontSize="28rpx"
        fontWeight="bold"
        backgroundColor="#D7BA79"
        width="180rpx"
        height="58rpx"
        borderRadius="32rpx"
      ></simple-button>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
import simpleButton from "@/components/button/simpleButton";
export default {
  components: {
    qicon,
    simpleButton
  },
  methods: {
    handlerQueryAvailable() {
      this.$emit("queryAvailable");
    }
  }
};
</script>

<style scoped>
.ha-container {
  width: 644rpx;
}
.img-item {
  width: 212rpx;
  height: 146rpx;
  border-radius: 20rpx;
  overflow: hidden;
}
.font-desc {
  color: #828282;
  font-size: 24rpx;
}
.font-title {
  color: #101010;
  font-size: 28rpx;
  font-weight: bold;
}
.flex-h {
  display: flex;
  align-items: center;
}
.flex-h-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex-v-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex-v {
  display: flex;
  flex-direction: column;
}
</style>