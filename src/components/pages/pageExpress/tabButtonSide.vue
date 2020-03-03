<template>
  <tabButtonSide
    :selected="selected"
    :text="text"
    :iconPath="iconPath"
    :newAdded="newAdded"
    iconSize="28rpx"
    fontSize="26rpx"
    fontColor="#5B5B5B"
    fontColorSelected="#101010"
    width="180rpx"
    height="82rpx"
    backgroundColor="#fff"
    bubbleWidth="26rpx"
    bubbleHeight="26rpx"
    bubbleBackgroundColor="#E51C23"
    bubbleBorderRadius="4rpx"
    bubbleFontColor="#fff"
    bubbleFontSize="24rpx"
    space="12rpx"
    verticalBarWidth="6rpx"
    verticalBarHeight="44rpx"
    verticalBarBackgroundColor="#D7BA79"
    @click="onClick"
  ></tabButtonSide>
</template>

<script>
import tabButtonSide from "@/components/button/tabButtonSide";
export default {
  props: ["text", "iconPath", "newAdded", "selected"],
  components: {
    tabButtonSide
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style>
</style>