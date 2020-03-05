<template>
  <div class="oi-container">
    <qicon size="66rpx" :path="iconPath"></qicon>
    <text class="oi-name">{{name}}</text>
    <text class="oi-count">{{count}}</text>
    <text class="oi-cost">{{cost}}</text>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["iconPath", "name", "count", "cost"],
  components: {
    qicon
  }
};
</script>

<style>
.oi-container {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}
.oi-name {
  color: #101010;
  font-size: 28rpx;
  margin-left: 16rpx;
  width: 200rpx;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.oi-count {
  font-size: 24rpx;
  color: #020202;
  margin-left: 194rpx;
}
.oi-cost {
  font-size: 32rpx;
  color: #020202;
  font-weight: bold;
  position: absolute;
  right: 0;
}
</style>