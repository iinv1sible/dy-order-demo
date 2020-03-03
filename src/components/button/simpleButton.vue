<template>
  <div class="sb-container" :style="styleObj">
    <span>{{text}}</span>
  </div>
</template>

<script>
import utils from "@/utils/utils";
export default {
  props: [
    "text",
    "color",
    "fontSize",
    "plain",
    "border",
    "backgroundColor",
    "width",
    "height",
    "borderRadius"
  ],
  computed: {
    styleObj() {
      return utils.styles({
        width: this.width ? this.width : "108rpx",
        height: this.height ? this.height : "44rpx",
        borderRadius: this.borderRadius ? this.borderRadius : "10rpx",
        backgroundColor: this.plain
          ? "#fff"
          : this.backgroundColor
            ? this.backgroundColor
            : "#D7BA79",
        border: this.plain
          ? this.border
            ? this.border
            : "1px solid #D7BA79"
          : "",
        color: this.color ? this.color : "#000",
        fontSize: this.fontSize ? this.fontSize : "24rpx"
      });
    }
  }
};
</script>

<style scoped>
.sb-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>