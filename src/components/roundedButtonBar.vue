<template>
  <div
    class="rbb-container"
    :style="{padding:padding?padding:'0 0',width:width?width:'400rpx',height:height?height:'auto',borderRadius:borderRadius?borderRadius:'50rpx',backgroundColor:backgroundColor?backgroundColor:'#fff'}"
  >
    <div v-for="(item, index) in list" :key="index">
      <div @click="onClick(item.id)">
        <circle-icon-button-top-down
          :iconText="item.iconText"
          :iconTextSize="item.iconTextSize"
          :iconTextColor="item.iconTextColor"
          :iconSize="item.iconSize"
          :iconColor="item.iconColor"
          :text="item.text"
          :textSize="item.textSize"
          :textColor="item.textColor"
        ></circle-icon-button-top-down>
      </div>
    </div>
  </div>
</template>

<script>
import circleIconButtonTopDown from "@/components/button/circleIconButtonTopDown";
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
    circleIconButtonTopDown
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