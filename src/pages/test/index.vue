<template>
  <div>
    <!-- <picker @change="changeStyle" :value="index" :range="allSysStylesNameArr">
      <view class="test-style-picker"
        >切换风格：{{ allSysStylesNameArr[index] }}</view
      >
    </picker> -->
    <div class="imgParent">
      <image mode="widthFix" src="/static/icon/store.png"></image>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      index: 1
    };
  },
  methods: {
    changeStyle(e) {
      this.index = e.target.value;
      this.setCurrentSysStyle(this.allSysStylesNameArr[this.index]);
    },
    ...mapMutations("storeSysStyles", ["setCurrentSysStyle"])
  },
  computed: {
    ...mapGetters("storeSysStyles", {
      allSysStylesNameArr: "getAllSysStylesNameArr",
      currentSysStyleName: "getCurrentSysStyleName"
    })
  }
};
</script>

<style scoped>
.test-style-picker {
  width: 400rpx;
  height: 50rpx;
  border: 1px solid #ccc;
  border-radius: 10rpx;
}
.imgParent {
  border: 1px solid red;
  width: 100px;
}
.imgParent > image {
  display: block;
  border: 1px solid lightgreen;
  width: 100%;
}
</style>
