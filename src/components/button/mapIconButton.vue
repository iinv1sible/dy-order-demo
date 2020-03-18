<template>
  <div class="mib-container">
    <qicon size="21px" path="/static/icon/map-black.png"></qicon>
    <text class="mib-text">{{text}}</text>
    <!-- <qicon size="16px" path="/static/icon/arrow-right.png"></qicon> -->
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["text"],
  components: {
    qicon
  }
};
</script>

<style scoped>
.mib-container {
  display: flex;
  width: 580rpx;
  align-items: center;
  color: #000;
  height: 30px;
}

.mib-text {
  flex: auto;
  font-size: 14px;
  margin-left: 5px;
}
</style>