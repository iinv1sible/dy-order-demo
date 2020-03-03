<template>
  <div class="qi-container">
    <text class="qi-label">{{label}}</text>
    <text class="qi-content">{{content}}</text>
    <div v-if="clickable?clickable:false">
      <qicon size="24rpx" path="/static/icon/arrow-right.png"></qicon>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["label", "content", "clickable"],
  components: {
    qicon
  }
};
</script>

<style scoped>
.qi-label {
  font-weight: bold;
  font-size: 26rpx;
  width: 130rpx;
}
.qi-content {
  font-size: 26rpx;
  color: #828282;
  flex: auto;
  margin-right: 10rpx;
  margin-left: 10rpx;
}
.qi-container {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>