<template>
  <div class="flex-h container-bg ha-container" style="width:644rpx">
    <div class="menu-left img-item">
      <qicon path="/static/icon/food.jpg"></qicon>
    </div>
    <div class="menu-center flex-v">
      <div class="font-title">龙凤呈祥</div>
      <div class="font-desc">共1份菜单 含1道菜</div>
      <div class="font-desc">￥7599/桌</div>
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
.menu-center {
  margin-left: 30rpx;
}
</style>