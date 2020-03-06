<template>
  <div class="pae-container">
    <div class="pae-form">
      <address-form
        @inputChange="handlerInputChange"
        @chooseLocation="handlerChooseLocation"
        :formData="formData"
        :genders="genders"
      ></address-form>
    </div>
    <div class="pae-button-bar">
      <div @click="handlerSave">
        <simpleButton
          text="保存地址"
          color="#333333"
          fontSize="28rpx"
          backgroundColor="#D7BA79"
          width="590rpx"
          height="72rpx"
          borderRadius="40rpx"
          fontWeight="bold"
        ></simpleButton>
      </div>
      <div v-if="type===2" @click="handlerDel">
        <simpleButton
          text="删除地址"
          color="#333333"
          fontSize="28rpx"
          plain="plain"
          border="1px solid #D7BA79"
          width="590rpx"
          height="72rpx"
          borderRadius="40rpx"
          fontWeight="bold"
        ></simpleButton>
      </div>
    </div>
  </div>
</template>

<script>
import addressForm from "@/components/pages/pageAddress/addressForm";
import simpleButton from "@/components/button/simpleButton";
import { mapGetters, mapMutations, mapActions } from "vuex";
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
export default {
  components: {
    addressForm,
    simpleButton
  },
  computed: {
    ...mapGetters("storePages/storePageAddressEdit", {
      type: "getType",
      formData: "getFormData",
      genders: "getGenders"
    })
  },
  methods: {
    handlerChooseLocation() {
      native.chooseLocation(res => {
        this.setAddressByLocationInfo(res);
      });
    },
    handlerInputChange(obj) {
      this.setFormDataFromNameValue(obj);
    },
    handlerSave() {
      this.actSaveAddress();
    },
    handlerDel() {
      this.actDelAddress();
    },
    ...mapMutations("storePages/storePageAddressEdit", [
      "setAddressByLocationInfo",
      "setFormDataFromNameValue"
    ]),
    ...mapActions("storePages/storePageAddressEdit", [
      "actSaveAddress",
      "actDelAddress"
    ])
  }
};
</script>

<style>
page {
  background-color: #f9f9f9;
}
</style>

<style scoped>
.pae-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pae-button-bar {
  margin-top: 34rpx;
}
.pae-button-bar > div:last-of-type {
  margin-top: 20rpx;
}
</style>