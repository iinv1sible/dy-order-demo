<template>
  <div class="ai-container">
    <div class="ai-address">
      <text class="ai-address-address">{{address}}</text>
      <text class="ai-address-door">{{door}}</text>
    </div>
    <div class="ai-receiver">
      <text class="ai-receiver-name">{{name}}</text>
      <text class="ai-receiver-gender">{{gender}}</text>
      <text class="ai-receiver-contact">{{contact}}</text>
    </div>
    <div @click="onEditClick" class="ai-edit-button">
      <qicon path="/static/icon/edit.png" size="40rpx"></qicon>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["address", "door", "name", "contact", "gender", "id"],
  components: {
    qicon
  },
  methods: {
    onEditClick() {
      this.$emit("edit", this.id);
    }
  }
};
</script>

<style scoped>
.ai-container {
  width: 750rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 24rpx;
  padding: 26rpx;
  position: relative;
  box-sizing: border-box;
}
.ai-address {
  display: flex;
  color: #101010;
}
.ai-receiver {
  margin-top: 6rpx;
  display: flex;
  color: #b6b6b6;
}
.ai-address-door {
  margin-left: 10rpx;
}
.ai-receiver-gender {
  margin-left: 10rpx;
}
.ai-receiver-contact {
  margin-left: 50rpx;
}
.ai-edit-button {
  position: absolute;
  right: 30rpx;
}
</style>