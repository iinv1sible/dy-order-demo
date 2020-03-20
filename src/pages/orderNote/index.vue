<template>
  <div class="pon-container">
    <div class="pon-textarea">
      <textarea :value="text" @input="setText($event.mp.detail.value)"></textarea>
      <text class="pon-counter">{{textLength}}/50个字</text>
    </div>
    <div class="pon-tag">
      <div class="pon-tag-title">快捷输入</div>
      <div class="pon-tag-list">
        <div v-for="tag in tagList" :key="id" @click="handlerSelect(tag.id)">
          <simple-button
            :text="tag.text"
            color="#A6A4A4"
            fontSize="24rpx"
            plain="plain"
            border="1px solid rgba(248,248,248,1)"
            backgroundColor="#fff"
            width="100rpx"
            height="60rpx"
          ></simple-button>
        </div>
      </div>
    </div>
    <div class="pon-confirm" @click="handlerConfirm">
      <simple-button
        text="确定"
        color="#333333"
        fontSize="28rpx"
        fontWeight="bold"
        backgroundColor="#D7BA79"
        width="690rpx"
        height="72rpx"
        borderRadius="32rpx"
      ></simple-button>
    </div>
  </div>
</template>

<script>
import simpleButton from "@/components/button/simpleButton";
import { mapActions, mapGetters, mapMutations } from "vuex";
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
export default {
  components: {
    simpleButton
  },
  methods: {
    handlerConfirm() {
      this.actTrigger(this.text);
      native.navigateBack();
    },
    handlerSelect(tagId) {
      let index = this.tagList.findIndex(tag => tag.id == tagId);
      let text = this.tagList[index].text;
      this.setText(this.text + text);
    },
    ...mapActions("storePages/storePageNote", ["actTrigger"]),
    ...mapMutations("storePages/storePageNote", ["setText"])
  },
  computed: {
    textLength() {
      return this.text.length;
    },
    ...mapGetters("storePages/storePageNote", {
      tagList: "getTagList",
      text: "getText"
    })
  }
};
</script>

<style scoped>
.pon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pon-textarea {
  background-color: #f8f8f8;
  border: 1px solid rgba(248, 248, 248, 1);
  color: rgba(166, 164, 164, 1);
  font-size: 24rpx;
  width: 700rpx;
  height: 288rpx;
  margin-top: 26rpx;
  line-height: 34rpx;
  position: relative;
}
.pon-counter {
  position: absolute;
  right: 38rpx;
  bottom: 22rpx;
}
.pon-tag-list {
  display: flex;
  flex-wrap: wrap;
}
.pon-tag-list > div {
  margin-right: 16rpx;
  margin-bottom: 16rpx;
}
.pon-tag-title {
  font-size: 28rpx;
  color: #a6a4a4;
  margin-top: 52rpx;
  margin-bottom: 18rpx;
}
.pon-tag {
  width: 700rpx;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.pon-confirm {
  margin-top: 30rpx;
}
</style>
