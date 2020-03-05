<template>
  <div class="pae-container">
    <div class="pae-form">
      <address-form :formData="formData"></address-form>
    </div>
    <div class="pae-button-bar">
      <div>
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
      <div v-if="type===2">
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
import { mapGetters } from "vuex";
export default {
  components: {
    addressForm,
    simpleButton
  },
  computed: {
    ...mapGetters("storePages/storePageAddressEdit", {
      type: "getType",
      formData: "getFormData"
    })
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