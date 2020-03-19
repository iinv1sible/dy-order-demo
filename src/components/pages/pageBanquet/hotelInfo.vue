<template>
  <div class="hi-container flex-v-center container-bg">
    <div class="hi-top flex-h-between">
      <div class="hi-top-left">
        <qicon size="36rpx" path="/static/icon/store.png"></qicon>
      </div>
      <div class="hi-top-center flex-v">
        <div class="font-title">宁波开元大酒店</div>
        <div class="font-desc">豪华4星 ￥3988-5688/桌</div>
      </div>
      <div class="hi-top-right" @click="handlerReserve">
        <simple-button
          text="预约到店"
          color="#333333"
          fontSize="28rpx"
          fontWeight="bold"
          backgroundColor="#D7BA79"
          width="180rpx"
          height="58rpx"
          borderRadius="32rpx"
        ></simple-button>
      </div>
    </div>
    <div class="hi-bottom flex-h-between">
      <div class="flex-v-center" style="width:150rpx">
        <div class="padding-s">
          <qicon size="40rpx" path="/static/icon/store.png"></qicon>
        </div>
        <div class="flex-h">
          <div class="font-num">41</div>
          <div class="font-xs">㎡-</div>
          <div class="font-num">791</div>
          <div class="font-xs">㎡</div>
        </div>
        <div class="font-small">会议室面积</div>
      </div>
      <div class="flex-v-center" style="width:150rpx">
        <div class="padding-s">
          <qicon size="40rpx" path="/static/icon/store.png"></qicon>
        </div>
        <div class="flex-h">
          <div class="font-num">12</div>
          <div class="font-xs">人-</div>
          <div class="font-num">1200</div>
          <div class="font-xs">人</div>
        </div>
        <div class="font-small">会议室容量</div>
      </div>
      <div class="flex-v-center" style="width:150rpx">
        <div class="padding-s">
          <qicon size="40rpx" path="/static/icon/store.png"></qicon>
        </div>
        <div class="flex-h">
          <div class="font-num">322</div>
          <div class="font-xs">间</div>
        </div>
        <div class="font-small">客房数量</div>
      </div>
      <div class="flex-v-center" style="width:150rpx">
        <div class="padding-s">
          <qicon size="40rpx" path="/static/icon/store.png"></qicon>
        </div>
        <div class="flex-h">
          <div class="font-num">349</div>
          <div class="font-xs">个</div>
        </div>
        <div class="font-small">停车位数量</div>
      </div>
    </div>
  </div>
</template>

<script>
import simpleButton from "@/components/button/simpleButton";
import qicon from "@/components/icon/qicon";
export default {
  components: {
    qicon,
    simpleButton
  },
  methods: {
    handlerReserve() {
      this.$emit("reserve");
    }
  }
};
</script>

<style >
page {
  background-color: #f2f2f2;
}
</style>

<style scoped>
.hi-top {
  width: 644rpx;
  padding: 20rpx 0;
}
.hi-bottom {
  width: 644rpx;
  padding: 20rpx 0;
}
.font-small {
  font-size: 24rpx;
  color: #ccc;
}
.flex-h {
  display: flex;
  align-items: center;
}
.flex-h-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex-v-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex-v {
  display: flex;
  flex-direction: column;
}
.font-num {
  font-size: 24rpx;
  font-weight: bold;
}
.font-xs {
  font-size: 20rpx;
}
.font-desc {
  color: #828282;
  font-size: 24rpx;
}
.font-title {
  color: #101010;
  font-size: 28rpx;
  font-weight: bold;
}
.container-bg {
  background-color: #fff;
  border-radius: 40rpx;
}
.padding-s {
  padding: 10rpx;
}
</style>