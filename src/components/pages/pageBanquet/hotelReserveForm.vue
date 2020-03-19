<template>
  <div @click="handlerClickContainer" class="hrf-container">
    <div @click.stop="handlerClickBottom" class="hrf-bottom">
      <div style="padding:16rpx 0" class="font-title">请确认预约信息</div>
      <div class="font-desc">预约后，我们将安排专业顾问致电您，提供咨询服务</div>
      <div class="hrf-type">
        <div style="width:200rpx">
          <text class="font-require">*</text>
          <text class="font-name">宴会类型</text>
        </div>
        <div class="hrf-type-tag-parent">
          <div v-for="type in banquetTypes" :key="id" @click="setSelectedBanquetType(type.id)">
            <simple-button
              :text="type.text"
              :color="selectedBanquetType == type.id?'#D7BA79':'#101010'"
              fontSize="28rpx"
              plain="plain"
              border="1px solid rgba(190,190,190,1)"
              backgroundColor="#fff"
              width="156rpx"
              height="50rpx"
              borderRadius="8rpx"
            ></simple-button>
          </div>
        </div>
      </div>
      <div class="hrf-name" style="position:relative">
        <div style="width:150rpx">
          <text class="font-require">*</text>
          <text class="font-name">姓名</text>
        </div>
        <div>
          <input style="width:250rpx" />
        </div>
        <div style="position:absolute;right:0" class="flex-h">
          <div class="flex-h">
            <icon v-if="gender==0" type="success" size="40rpx" />
            <icon v-if="gender==1" @click="setGender(0)" type="circle" size="40rpx" />
            <div style="margin-left:10rpx">先生</div>
          </div>
          <div style="margin-left:20rpx" class="flex-h">
            <icon v-if="gender==1" type="success" size="40rpx" />
            <icon v-if="gender==0" @click="setGender(1)" type="circle" size="40rpx" />
            <div style="margin-left:10rpx">女士</div>
          </div>
        </div>
      </div>
      <div class="hrf-phone" style="position:relative">
        <div style="width:150rpx">
          <text class="font-require">*</text>
          <text class="font-name">手机号</text>
        </div>
        <div>
          <input
            style="width:250rpx"
            @input="setPhoneNumber($event.mp.detail.value)"
            :value="phoneNumber"
            type="number"
          />
        </div>
        <div style="position:absolute;right:0">
          <button
            @getphonenumber.stop="handlerGetPhoneNumber"
            style="padding:0;margin:0;line-height:34rpx;color:#D7BA79;font-size:24rpx;border:1px solid rgba(51,51,51,1);background-color:#333333;width:144rpx;height:42rpx;border-radius:36rpx"
            open-type="getPhoneNumber"
          >一键获取</button>
        </div>
      </div>
      <div class="hrf-we" style="position:relative">
        <div style="padding-left:16rpx;width:134rpx" class="font-name">微信</div>
        <div>
          <input
            style="width:250rpx"
            @input="setWeNumber($event.mp.detail.value)"
            :value="weNumber"
          />
        </div>
        <div @click.stop="handlerSetSamePhoneNumber" style="position:absolute;right:0">
          <simple-button
            text="同手机号"
            color="#D7BA79"
            fontSize="24rpx"
            border="1px solid rgba(51,51,51,1)"
            backgroundColor="#333333"
            width="144rpx"
            height="42rpx"
            borderRadius="36rpx"
          ></simple-button>
        </div>
      </div>
      <div class="hrf-confirm" @click="handlerConfirm">
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
  </div>
</template>

<script>
import simpleButton from "@/components/button/simpleButton";
import qicon from "@/components/icon/qicon";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    qicon,
    simpleButton
  },
  methods: {
    handlerConfirm() {
      this.$emit("close");
    },
    handlerSetSamePhoneNumber() {
      console.log("handlerSetSamePhoneNumber");
      this.setWeNumber(this.phoneNumber);
    },
    handlerClickContainer() {
      console.log("handlerClickContainer");
      this.$emit("close");
    },
    handlerClickBottom() {
      console.log("handlerClickBottom");
    },
    handlerGetPhoneNumber(e) {
      console.log(e.detail);
      this.setPhoneNumber("13888888888");
    },
    ...mapMutations("storePages/storePageBanquet", [
      "setPhoneNumber",
      "setWeNumber",
      "setGender",
      "setSelectedBanquetType"
    ])
  },
  computed: {
    ...mapGetters("storePages/storePageBanquet", {
      phoneNumber: "getPhoneNumber",
      weNumber: "getWeNumber",
      gender: "getGender",
      banquetTypes: "getBanquetTypes",
      selectedBanquetType: "getSelectedBanquetType"
    })
  }
};
</script>

<style scoped>
.flex-h {
  display: flex;
  align-items: center;
}
.hrf-type-tag-parent {
  display: flex;
  flex-wrap: wrap;
  width: 600rpx;
}
.hrf-type-tag-parent > div {
  margin-right: 12rpx;
  margin-bottom: 12rpx;
}
.hrf-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.hrf-type,
.hrf-name,
.hrf-phone,
.hrf-we {
  width: 706rpx;
  display: flex;
  align-items: center;
  padding: 16rpx 0;
}
.hrf-name {
  border-bottom: 1px solid #f2f2f2;
}
.hrf-phone {
  border-bottom: 1px solid #f2f2f2;
}
.hrf-type {
  align-items: flex-start;
}
.hrf-bottom {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 750rpx;
  border-radius: 30rpx 30rpx 0 0;
}
.font-desc {
  color: #c1c1c1;
  font-size: 28rpx;
}
.font-title {
  font-size: 40rpx;
  color: #101010;
}
.font-name {
  font-size: 32rpx;
  color: #101010;
}
.font-require {
  color: red;
}
</style>