<template>
  <div class="pon-container">
    <div class="pon-textarea">
      <textarea></textarea>
      <text class="pon-counter">0/50个字</text>
    </div>
    <div class="pon-tag">
      <div class="pon-tag-title">快捷输入</div>
      <div class="pon-tag-list">
        <div v-for="tag in tagList" :key="id">
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
  </div>
</template>

<script>
import simpleButton from "@/components/button/simpleButton";
export default {
  data() {
    return {
      tagList: [
        {
          id: 1,
          text: "不要辣"
        },
        {
          id: 2,
          text: "少点辣"
        },
        {
          id: 3,
          text: "多点辣"
        },
        {
          id: 4,
          text: "不要香菜"
        },
        {
          id: 5,
          text: "不要洋葱"
        },
        {
          id: 6,
          text: "多点醋"
        },
        {
          id: 7,
          text: "多点葱"
        }
      ]
    };
  },
  components: {
    simpleButton
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
</style>
