<template>
  <div>
    <div class="psl-search">
      <icon-input
        iconPath="/static/icon/search.png"
        iconSize="30rpx"
        placeholder="搜索酒店"
        fontSize="24rpx"
        borderRadius="30rpx"
        space="6rpx"
        padding="10rpx 30rpx"
        width="708rpx"
        height="50rpx"
        inputHeight="30rpx"
      ></icon-input>
    </div>
    <div class="psl-map">
      <map id="map"></map>
    </div>
    <div class="psl-list"></div>
  </div>
</template>

<script>
import iconInput from "@/components/input/iconInput";
export default {
  components: {
    iconInput
  }
};
</script>

<style>
page {
  background-color: #f9f9f9;
}
</style>

<style scoped>
.psl-search {
  padding: 20rpx 24rpx;
  background-color: #fff;
}
.psl-map {
  width: 750rpx;
  height: 400rpx;
}
.psl-map > map {
  width: 100%;
  height: 100%;
}
</style>