
<template>
  <div
    @click="onClick"
    class="ib-container"
    :style="{width:containerWidth?containerWidth:'200rpx', height:containerHeight?containerHeight:'50rpx'}"
  >
    <qicon :size="iconSize?iconSize:'20rpx'" :path="iconPath"></qicon>
    <text
      :style="{fontSize:fontSize?fontSize:'20rpx',color:fontColor?fontColor:'#000',marginLeft:space?space:'0'}"
    >{{label?label:"按钮"}}</text>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: [
    "iconPath",
    "iconSize",
    "label",
    "fontSize",
    "fontColor",
    "containerWidth",
    "containerHeight",
    "space"
  ],
  components: {
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
.ib-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>