<template>
  <div
    class="ii-container"
    :style="{borderRadius:borderRadius,padding:padding,width:width,height:height}"
  >
    <div class="ii-icon">
      <qicon :path="iconPath" :size="iconSize"></qicon>
    </div>
    <input
      class="ii-input"
      :placeholder="placeholder"
      :style="{fontSize:fontSize, marginLeft:space, height:inputHeight}"
    />
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: [
    "iconPath",
    "iconSize",
    "placeholder",
    "fontSize",
    "borderRadius",
    "padding",
    "space",
    "inputHeight"
  ],
  components: {
    qicon
  }
};
</script>

<style scoped>
.ii-container {
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  color: #bcbcbd;
}
</style>