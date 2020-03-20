<template>
  <div @click="handlerClose" class="tp-container">
    <div class="tp-content" @click.stop="handlerStopBubble">
      <div class="tp-title">
        <div>{{data.title}}</div>
        <div class="tp-title-confirm" @click="handlerConfirm">
          <simple-button
            text="确定"
            color="#101010"
            fontSize="24rpx"
            plain="plain"
            border="1px solid #ccc"
            backgroundColor="#fff"
            width="80rpx"
            height="50rpx"
            borderRadius="10rpx"
          ></simple-button>
        </div>
      </div>
      <div class="tp-picker">
        <scroll-view class="tp-picker-left" scroll-y="true">
          <div class="tp-picker-left-item" v-for="node in data.nodes" :key="text">
            <div>{{node.text}}</div>
          </div>
        </scroll-view>
        <scroll-view class="tp-picker-right" scroll-y="true">
          <div
            @click="handlerSelectSubNode(index)"
            class="tp-picker-right-item"
            v-for="(subNode, index) in subNodes"
            :key="text"
          >
            <div>{{subNode.text}}</div>
            <div>
              <icon :type="index == data.selectedSubNodeIndex?'success':'circle'"></icon>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
import simpleButton from "@/components/button/simpleButton";
export default {
  components: {
    simpleButton
  },
  props: ["data"],
  computed: {
    subNodes() {
      return this.data.nodes[this.data.selectedNodeIndex].nodes;
    }
  },
  methods: {
    handlerConfirm() {
      this.$emit("confirm");
    },
    handlerStopBubble() {},
    handlerClose() {
      this.$emit("close");
    },
    handlerSelectSubNode(index) {
      this.$emit("selectSubNode", index);
    }
  }
};
</script>

<style scoped>
.tp-container {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.64);
}
.tp-content {
  position: absolute;
  bottom: 0;
  width: 750rpx;
  height: 500rpx;
  border-radius: 30rpx 30rpx 0 0;
  background-color: #f6f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tp-title {
  font-weight: bold;
  color: #101010;
  padding: 10rpx 0;
  font-size: 34rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}
.tp-title-confirm {
  position: absolute;
  right: 40rpx;
}
.tp-picker {
  width: 100%;
  height: 430rpx;
  display: flex;
}
.tp-picker-left {
  height: 100%;
  width: 200rpx;
}
.tp-picker-right {
  height: 100%;
  width: 548rpx;
  margin-left: 2rpx;
  background-color: #fff;
}
.tp-picker-left-item {
  background-color: #fff;
  padding: 14rpx;
  font-size: 28rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tp-picker-right-item {
  padding: 14rpx 0;
  font-size: 28rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500rpx;
  margin-left: 24rpx;
  border-bottom: 1px solid #f6f5f5;
}
.tp-picker-right-item:last-of-type {
  border-bottom: none;
}
</style>