<template>
  <div
    @click="onClick"
    class="tbs-container"
    :style="{width:width,height:height, backgroundColor:selected?backgroundColor:none}"
  >
    <div
      v-show="selected"
      class="tbs-vertical-bar"
      :style="{width:verticalBarWidth, height:verticalBarHeight, backgroundColor:verticalBarBackgroundColor}"
    ></div>
    <div v-if="iconPath">
      <qicon :path="iconPath" :size="iconSize"></qicon>
    </div>
    <div class="tbs-text-container">
      <span
        :style="{fontSize:fontSize, color:selected?fontColorSelected:fontColor, marginLeft:space}"
      >{{text}}</span>
      <div
        class="tbs-bubble"
        v-if="newAdded"
        :style="{top:'-' + bubbleHeight, right: '-' + bubbleWidth}"
      >
        <bubble
          :width="bubbleWidth"
          :height="bubbleHeight"
          :text="newAdded"
          :backgroundColor="bubbleBackgroundColor"
          :borderRadius="bubbleBorderRadius"
          :fontColor="bubbleFontColor"
          :fontSize="bubbleFontSize"
        ></bubble>
      </div>
    </div>
  </div>
</template>

<script>
import bubble from "@/components/icon/bubble";
import qicon from "@/components/icon/qicon";
export default {
  props: [
    "iconPath",
    "iconSize",
    "text",
    "fontSize",
    "fontColor",
    "fontColorSelected",
    "width",
    "height",
    "backgroundColor",
    "selected",
    "newAdded",
    "bubbleWidth",
    "bubbleHeight",
    "bubbleBackgroundColor",
    "bubbleBorderRadius",
    "bubbleFontColor",
    "bubbleFontSize",
    "space",
    "verticalBarWidth",
    "verticalBarHeight",
    "verticalBarBackgroundColor"
  ],
  components: {
    bubble,
    qicon
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.tbs-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.tbs-vertical-bar {
  left: 1px;
  position: absolute;
}
.tbs-text-container {
  position: relative;
  display: flex;
  align-items: flex-start;
}
.tbs-bubble {
  position: absolute;
}
</style>