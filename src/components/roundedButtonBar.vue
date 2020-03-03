<template>
  <div
    class="rbb-container"
    :style="{padding:padding?padding:'0 0',width:width?width:'400rpx',height:height?height:'100rpx',borderRadius:borderRadius?borderRadius:'50rpx',backgroundColor:backgroundColor?backgroundColor:'#fff'}"
  >
    <div v-for="(item, index) in list" :key="index">
      <icon-button
        :iconPath="item.iconPath"
        :label="item.label"
        :iconSize="item.iconSize?item.iconSize:null"
        :fontSize="item.fontSize?item.fontSize:null"
        @click="onClick(item.id)"
      ></icon-button>
    </div>
  </div>
</template>

<script>
import iconButton from "@/components/button/iconButton";
export default {
  props: [
    "width",
    "height",
    "padding",
    "borderRadius",
    "backgroundColor",
    "list"
  ],
  components: {
    iconButton
  },
  methods: {
    onClick(id) {
      this.$emit("click", id);
    }
  }
};
</script>

<style scoped>
.rbb-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
}
</style>