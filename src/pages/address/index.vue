<template>
  <div class="pa-container">
    <div class="pa-address-list">
      <div v-for="addr in addressList" :key="id">
        <address-item
          :address="addr.address"
          :door="addr.door"
          :name="addr.receiver.name"
          :contact="addr.receiver.contact"
          :gender="addr.receiver.genderDesc"
          :id="addr.id"
          @edit="handlerEdit"
        ></address-item>
      </div>
    </div>
    <div @click="handlerAdd" class="pa-add">
      <qicon path="/static/icon/add.png" size="36rpx"></qicon>
      <text>新增收货地址</text>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
import { mapGetters, mapMutations } from "vuex";
import addressItem from "@/components/pages/pageAddress/addressItem";
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
export default {
  computed: {
    ...mapGetters("storeGlobal", {
      addressList: "getAddressList",
      getAddressById: "getAddressById"
    })
  },
  components: {
    addressItem,
    qicon
  },
  methods: {
    handlerAdd() {
      this.setType(1); //新增状态
      this.setFormData({});
      native.nav2("/pages/addressEdit/main");
    },
    handlerEdit(id) {
      this.setType(2); //编辑状态
      this.setFormDateFromAddress(this.getAddressById(id));
      native.nav2("/pages/addressEdit/main");
    },
    ...mapMutations("storePages/storePageAddressEdit", [
      "setType",
      "setFormData",
      "setFormDateFromAddress"
    ])
  }
};
</script>

<style scoped>
.pa-container {
  display: flex;
  justify-content: center;
}
.pa-address-list {
  border: 1px solid #ccc;
}
.pa-address-list > div {
  border-bottom: 1px solid #ccc;
}
.pa-address-list > div:last-of-type {
  border-bottom: none;
}
.pa-add {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100rpx;
  position: fixed;
  bottom: 0;
}
.pa-add > text {
  margin-left: 20rpx;
  color: #101010;
  font-size: 32rpx;
}
</style>