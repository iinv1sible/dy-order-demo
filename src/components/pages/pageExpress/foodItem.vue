<template>
  <div @click="onClick" class="fi-container">
    <div class="fi-icon" :style="{opacity:soldout?0.5:1}">
      <qicon size="200rpx" :path="iconPath"></qicon>
    </div>
    <div class="fi-detail">
      <div class="fi-name" :style="{opacity:soldout?0.5:1}">
        <text>{{nameText}}</text>
      </div>
      <div class="fi-info" :style="{opacity:soldout?0.5:1}">
        <text>{{infoText}}</text>
      </div>
      <div class="fi-soldout" v-if="soldout">
        <simple-button width="60rpx" height="36rpx" text="售罄" plain="plain"></simple-button>
      </div>
      <div class="fi-cost" :style="{opacity:soldout?0.5:1}">
        <text>{{costText}}</text>
      </div>
      <div @click.stop="onAdd" class="fi-add" v-if="!soldout">
        <qicon size="40rpx" path="/static/icon/add.png"></qicon>
      </div>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
import simpleButton from "@/components/button/simpleButton";
export default {
  props: [
    "iconPath",
    "nameText",
    "infoText",
    "costText",
    "soldout",
    "id",
    "storage"
  ],
  components: {
    qicon,
    simpleButton
  },
  methods: {
    onClick() {
      if (!this.soldout) this.$emit("click", this.id);
    },
    onAdd() {
      if (!this.soldout) this.$emit("add", this.id);
    },
    testClick(msg) {
      console.log(msg);
    }
  },
  computed: {
    soldout() {
      return this.storage <= 0;
    }
  }
};
</script>

<style scoped>
.fi-container {
  display: flex;
  align-items: center;
  width: 568rpx;
  height: 246rpx;
  background-color: #fff;
  padding: 18rpx;
  box-sizing: border-box;
}
.fi-detail {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 18rpx;
  position: relative;
  height: 100%;
}
.fi-name {
  font-size: 28rpx;
  font-weight: bold;
  color: #101010;
}
.fi-info {
  font-size: 24rpx;
  color: #bfbdbd;
}
.fi-cost {
  font-size: 40rpx;
  color: #df0902;
  font-weight: bold;
  position: absolute;
  bottom: -20rpx;
}
.fi-add {
  position: absolute;
  right: 0;
  bottom: -4rpx;
}
.fi-soldout {
  margin-top: 8rpx;
}
</style>