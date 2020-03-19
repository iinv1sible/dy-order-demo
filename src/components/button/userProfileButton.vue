<template>
  <div class="upb-container">
    <div class="upb-icon">
      <open-data type="userAvatarUrl"></open-data>
      <!-- <image></image> -->
    </div>
    <div class="upb-detail">
      <open-data class="upb-name" type="userNickName"></open-data>
      <!-- <text class="upb-name">昵称</text> -->
      <!-- <text class="upb-phone">132****0353</text> -->
    </div>
    <!-- <qicon size="32rpx" path="/static/icon/arrow-right.png"></qicon> -->
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["headIcon", "name", "phone"],
  components: {
    qicon
  }
};
</script>
<style scoped>
.upb-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 140rpx;
}
.upb-detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: auto;
  margin-left: 44rpx;
}
.upb-phone {
  margin-top: 12rpx;
  font-weight: bold;
}
.upb-name {
  font-size: 36rpx;
  color: #101010;
  font-weight: bold;
}
.upb-phone {
  font-size: 36rpx;
  color: #101010;
}
.upb-icon {
  width: 140rpx;
  height: 140rpx;
  border-radius: 70rpx;
  overflow: hidden;
}
.upb-icon > image {
  width: 100%;
  height: 100%;
  background-color: #ccc;
}
</style>
