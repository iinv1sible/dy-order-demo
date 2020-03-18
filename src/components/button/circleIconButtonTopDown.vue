<template>
  <div class="cibtd-container">
    <div class="cibtd-top" :style="styleObjCibtdTop">
      <div>{{iconText}}</div>
    </div>
    <div class="cibtd-text" :style="styleObjCibtdText">{{text}}</div>
  </div>
</template>

<script>
import utils from "@/utils/utils";
export default {
  props: [
    "iconText",
    "iconTextSize",
    "iconTextColor",
    "iconSize",
    "iconColor",
    "text",
    "textSize",
    "textColor"
  ],
  computed: {
    styleObjCibtdTop() {
      return utils.styles({
        width: this.iconSize,
        height: this.iconSize,
        borderRadius: "100%",
        backgroundColor: this.iconColor,
        fontSize: this.iconTextSize,
        color: this.iconTextColor
      });
    },
    styleObjCibtdText() {
      return utils.styles({
        fontSize: this.textSize,
        color: this.textColor
      });
    }
  }
};
</script>

<style scoped>
.cibtd-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.cibtd-top {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cibtd-text {
  margin-top: 8rpx;
}
</style>