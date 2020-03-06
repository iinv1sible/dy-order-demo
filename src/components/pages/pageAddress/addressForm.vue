<template>
  <div class="af-container">
    <div @click="chooseLocation" class="af-address">
      <text>收货地址：</text>
      <div class="af-address-center">
        <text>{{formData.addressName}}</text>
        <text>{{formData.addressLocation}}</text>
      </div>
      <div>
        <qicon path="/static/icon/arrow-right.png" size="32rpx"></qicon>
      </div>
    </div>
    <div class="af-door">
      <text>门牌号：</text>
      <input :value="formData.door" @input="onInputChange('door', $event)" />
    </div>
    <div class="af-name-gender">
      <text>联系人：</text>
      <input :value="formData.name" @input="onInputChange('name', $event)" />
      <div>
        <radio-group @change="onInputChange('gender', $event)">
          <radio
            v-for="gender in genders"
            :key="gender"
            :value="gender.value"
            :checked="gender.checked"
          >
            <text>{{gender.text}}</text>
          </radio>
        </radio-group>
      </div>
    </div>
    <div class="af-contact">
      <text>手机号：</text>
      <input :value="formData.contact" @input="onInputChange('contact', $event)" />
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["formData", "genders"],
  components: {
    qicon
  },
  methods: {
    chooseLocation() {
      this.$emit("chooseLocation");
    },
    onInputChange(name, e) {
      console.log(name, e);
      this.$emit("inputChange", { name, value: e.target.value });
    }
  }
};
</script>

<style scoped>
.af-container {
  background-color: #fff;
  width: 750rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24rpx;
  color: #474748;
}
.af-container > div {
  width: 670rpx;
  padding: 20rpx 0;
  border-bottom: 1px solid #f8f8f8;
}
.af-container > div:last-of-type {
  border-bottom: none;
}
.af-address {
  display: flex;
  align-items: flex-start;
}
.af-address > text:first-of-type {
  font-weight: bold;
  width: 150rpx;
}
.af-address-center {
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.af-address-center > text:last-of-type {
  font-size: 20rpx;
  color: #cecece;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
.af-door {
  display: flex;
  align-items: center;
}
.af-door > text:first-of-type {
  font-weight: bold;
  width: 150rpx;
}
.af-name-gender {
  display: flex;
  align-items: center;
  position: relative;
}
.af-name-gender > text:first-of-type {
  font-weight: bold;
  width: 150rpx;
}
.af-name-gender > div {
  position: absolute;
  right: 0;
}
.af-contact {
  display: flex;
  align-items: center;
}
.af-contact > text:first-of-type {
  font-weight: bold;
  width: 150rpx;
}
</style>