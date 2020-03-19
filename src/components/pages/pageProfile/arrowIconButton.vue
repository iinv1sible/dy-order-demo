<template>
  <div class="aibea-container">
    <arrow-icon-button
      :iconPath="iconPath"
      :showArrow="showArrow"
      iconSize="44rpx"
      :text="text"
      fontSize="28rpx"
      fontColor="#333333"
      arrowIconPath="/static/icon/arrow-right.png"
      arrowIconSize="20rpx"
      width="680rpx"
      height="44rpx"
      space="28rpx"
    ></arrow-icon-button>
  </div>
</template>

<script>
import arrowIconButton from "@/components/button/arrowIconButton";
export default {
  props: ["text", "iconPath", "showArrow"],
  components: {
    arrowIconButton
  }
};
</script>
<style scoped>
.aibea-container {
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
</style>
