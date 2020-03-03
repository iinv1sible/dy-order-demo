<template>
  <div class="aib-container" :style="{ width: width, height: height }">
    <qicon :size="iconSize" :path="iconPath"></qicon>
    <text class="aib-text" :style="{ color: fontColor, marginLeft: space }">{{
      text
    }}</text>
    <qicon :size="arrowIconSize" :path="arrowIconPath"></qicon>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: [
    "iconPath",
    "iconSize",
    "text",
    "fontSize",
    "fontColor",
    "arrowIconPath",
    "arrowIconSize",
    "width",
    "height",
    "space"
  ],
  components: {
    qicon
  }
};
</script>
<style scoped>
.aib-container {
  display: flex;
  align-items: center;
}
.aib-text {
  flex: auto;
}
</style>
