<template>
  <div @click="onSelect" class="si-container">
    <div class="si-top">
      <text class="si-name">{{title}}</text>
      <div @click.stop="onPhone" class="si-phone">
        <qicon path="/static/icon/phone.png" size="28rpx"></qicon>
      </div>
      <div class="si-top-btn-bar">
        <div v-if="!isInBusi">
          <simple-button
            text="休息中"
            color="#fff"
            fontSize="24rpx"
            backgroundColor="rgba(51,51,51,0.31)"
            width="80rpx"
            height="36rpx"
            borderRadius="10rpx"
          ></simple-button>
        </div>
        <div v-if="!isInExpressRange">
          <simple-button
            text="超出外送配送范围"
            color="#fff"
            fontSize="24rpx"
            backgroundColor="rgba(51,51,51,0.31)"
            width="196rpx"
            height="36rpx"
            borderRadius="10rpx"
          ></simple-button>
        </div>
      </div>
      <text class="si-dist">{{distDesc}}</text>
    </div>
    <div class="si-center">
      <text>{{address}}</text>
    </div>
    <div class="si-bottom">
      <text>{{expressDesc}}</text>
      <text></text>
    </div>
    <icon v-if="selected" class="si-select" type="success_no_circle"></icon>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
import simpleButton from "@/components/button/simpleButton";
export default {
  props: [
    "title",
    "isInBusi",
    "isInExpressRange",
    "distDesc",
    "address",
    "expressDesc",
    "selected",
    "id"
  ],
  components: {
    qicon,
    simpleButton
  },
  methods: {
    onSelect() {
      this.$emit("select", this.id);
    },
    onPhone() {
      this.$emit("phone", this.id);
    }
  }
};
</script>

<style scoped>
.si-container {
  display: flex;
  font-size: 24rpx;
  width: 750rpx;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14rpx 0;
  background-color: #fff;
  position: relative;
}
.si-container > div {
  width: 702rpx;
  padding: 4rpx 0;
}
.si-top {
  display: flex;
  position: relative;
  align-items: center;
}
.si-top-btn-bar {
  display: flex;
}
.si-top-btn-bar > div {
  margin-left: 18rpx;
}
.si-name {
  font-size: 28rpx;
  color: #101010;
}
.si-dist {
  position: absolute;
  color: #c8c8c8;
  right: 0;
}
.si-center {
  color: #828282;
}
.si-bottom {
  color: #828282;
}
.si-phone {
  margin-left: 18rpx;
}
.si-select {
  position: absolute;
  right: 20rpx;
}
</style>