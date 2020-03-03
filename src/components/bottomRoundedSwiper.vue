<template>
  <div class="brs-container">
    <swiper class="brs-swiper">
      <block v-for="img in imgList" :key="img">
        <swiper-item class="brs-swiper-item">
            <image mode="widthFix" class="brs-swiper-item-image" :src="img"></image>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ["imgList"]
};
</script>

<style scoped>
.brs-swiper{
  height: 390rpx;
}
.brs-swiper-item{
  width: 100%;
}

.brs-swiper-item-image{
  width: 100%;
}

.brs-container{
  border-radius: 0 0 20rpx 20rpx;
  overflow: hidden;
}
</style>