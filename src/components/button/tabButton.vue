<template>
  <div class="tb-container" @click="handlerClick">
    <text
      :style="{
        color: selected ? '#d7ba79' : '#000',
        fontSize: fontSize ? fontSize : '32rpx'
      }"
      class="tb-text"
    >{{ text }}</text>
    <div v-show="selected ? selected : false" :style="{ marginTop: lineSpace }">
      <qicon path="/static/icon/line.png" :size="iconSize ? iconSize : '60rpx'"></qicon>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["text", "fontSize", "iconSize", "selected", "lineSpace"],
  components: {
    qicon
  },
  methods: {
    handlerClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.tb-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tb-text {
  font-weight: bold;
}
</style>
