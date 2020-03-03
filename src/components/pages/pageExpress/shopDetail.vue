<template>
  <div class="sd-container">
    <div class="sd-name">
      <qicon size="30rpx" :path="iconPath"></qicon>
      <text>{{name}}</text>
      <div class="sd-switch">
        <simple-button
          text="切换"
          color="#101010"
          fontSize="24rpx"
          plain="plain"
          border="1px solid #E8E8E8"
          backgroundColor="#fff"
          width="60rpx"
          height="36rpx"
          borderRadius="10rpx"
        ></simple-button>
      </div>
    </div>
    <div class="sd-busitime">
      <text>{{busitime}}</text>
    </div>
    <div class="sd-cost">
      <text>{{cost}}</text>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
import simpleButton from "@/components/button/simpleButton";
export default {
  props: ["iconPath", "name", "busitime", "cost"],
  components: {
    simpleButton,
    qicon
  }
};
</script>

<style>
.sd-name {
  display: flex;
  align-items: center;
}
.sd-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #fff;
  width: 750rpx;
  padding: 30rpx 36rpx;
  box-sizing: border-box;
}

.sd-name > text:first-of-type {
  font-size: 36rpx;
  color: #101010;
  margin-left: 36rpx;
}
.sd-busitime {
  margin-top: 18rpx;
  font-size: 28rpx;
  color: #828282;
}
.sd-cost {
  font-size: 28rpx;
  color: #828282;
  margin-top: 16rpx;
}
.sd-switch {
  margin-left: 10rpx;
  position: relative;
  top: -4rpx;
}
</style>