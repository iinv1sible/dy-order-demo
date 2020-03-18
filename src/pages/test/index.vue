<template>
  <div>
    <movable-area style="height: 100px; width: 100px; background: red;">
      <movable-view
        style="height: 200px; width: 200px; background: blue;"
        direction="vertical"
        :out-of-bounds="true"
        :damping="10"
        @vtouchmove="handlerTouchMove"
      ></movable-view>
    </movable-area>
    <div class="followDiv" :style="{top:pageY}"></div>
  </div>
</template>

<script>
import imgButtonWithBottomBar from "@/components/button/imgButtonWithBottomBar";
export default {
  data() {
    return {
      pageY: 0
    };
  },
  components: {
    imgButtonWithBottomBar
  },
  methods: {
    handlerTouchMove(e) {
      this.pageY = e.pageY;
      console.log(this.pageY);
    }
  }
};
</script>

<style scoped>
.followDiv {
  width: 50rpx;
  height: 50rpx;
  background-color: #000;
  position: fixed;
}
</style>
