<template>
  <div>
    <div class="ppd-profile">
      <user-profile-button></user-profile-button>
    </div>
    <div class="ppd-form">
      <div class="ppd-top">
        <text class="ppd-top-nickname">昵称</text>
        <input class="ppd-top-input" value="昵称" />
        <div class="ppd-top-radio">
          <radio-group>
            <radio style="margin-right:26rpx">先生</radio>
            <radio>女士</radio>
          </radio-group>
        </div>
      </div>
      <div class="ppd-center">
        <text class="ppd-center-birth">生日</text>
        <input class="ppd-center-input" value="2020-02-22" />
      </div>
      <div class="ppd-bottom">
        <text class="ppd-bottom-phone">手机号</text>
        <input class="ppd-bottom-input" value="13282250353" />
        <text class="ppd-bottom-button">修改手机号</text>
      </div>
    </div>
    <div class="ppd-save">
      <simple-button
        text="保存"
        color="#333333"
        fontSize="28rpx"
        fontWeight="bold"
        backgroundColor="#D7BA79"
        width="600rpx"
        height="72rpx"
        borderRadius="40rpx"
      ></simple-button>
    </div>
  </div>
</template>

<script>
import userProfileButton from "@/components/button/userProfileButton";
import simpleButton from "@/components/button/simpleButton";
export default {
  components: {
    userProfileButton,
    simpleButton
  }
};
</script>

<style>
page {
  background-color: #f9f9f9;
}
</style>

<style scoped>
.ppd-profile {
  background-color: #fff;
  padding: 42rpx 24rpx;
  position: relative;
  display: flex;
  justify-content: center;
}
.ppd-form {
  margin-top: 20rpx;
  display: flex;
  flex-direction: column;
  width: 750rpx;
  background-color: #fff;
}
.ppd-form > div {
  display: flex;
  align-items: center;
  font-size: 28rpx;
  padding: 26rpx 32rpx;
}
.ppd-top-nickname,
.ppd-center-birth,
.ppd-bottom-phone {
  font-weight: bold;
  color: #333333;
  width: 100rpx;
}
.ppd-top-input,
.ppd-center-input,
.ppd-bottom-input {
  color: #828282;
}
.ppd-top-radio {
  font-size: 32rpx;
  color: #101010;
  position: absolute;
  right: 20rpx;
}
.ppd-top {
  position: relative;
}
.ppd-bottom {
  position: relative;
}
.ppd-bottom-button {
  color: #d7ba79;
}
.ppd-bottom-button {
  position: absolute;
  right: 20rpx;
}
.ppd-save {
  width: 750rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 56rpx;
}
</style>