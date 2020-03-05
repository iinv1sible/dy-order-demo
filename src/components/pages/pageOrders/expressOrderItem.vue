<template>
  <div @click="onDetail" class="eoi-container">
    <div class="eoi-top">
      <div class="eoi-top-left">
        <div>
          <qicon size="30rpx" path="/static/icon/store.png"></qicon>
          <text class="eoi-top-left-name">{{shopName}}</text>
          <qicon size="30rpx" path="/static/icon/arrow-right.png"></qicon>
        </div>
        <div>{{time}}</div>
      </div>
      <div class="eoi-top-right">
        <text
          :style="{color:status===ORDER_STATUS.WAIT_PAY?'red':'#A5A5A5'}"
        >{{ORDER_STATUS_DESC_MAP[status]}}</text>
      </div>
    </div>
    <div class="eoi-center">
      <div class="eoi-center-left">
        <text>{{foodDetailDesc}}</text>
        <text>{{foodNumDesc}}</text>
      </div>
      <div class="eoi-center-right">
        <text>{{cost}}</text>
      </div>
    </div>
    <div class="eoi-bottom" v-if="showBottomBar">
      <div v-if="status===ORDER_STATUS.WAIT_PAY">
        <text>请在15分钟内完成支付</text>
        <div @click.stop="onPay">
          <simpleButton plain="plain" text="立即支付"></simpleButton>
        </div>
      </div>
      <div
        v-if="status === ORDER_STATUS.EXPRESSED || status === ORDER_STATUS.FETCHED || status === ORDER_STATUS.CANCELED"
      >
        <div @click.stop="onAgain">
          <simpleButton plain="plain" text="再来一单"></simpleButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import simpleButton from "@/components/button/simpleButton";
import qicon from "@/components/icon/qicon";
import config from "@/static/config";
export default {
  props: [
    "id",
    "status",
    "shopName",
    "time",
    "foodDetailDesc",
    "foodNumDesc",
    "cost",
    "payDeadline"
  ],
  data() {
    return {
      ORDER_STATUS_DESC_MAP: config.ORDER_STATUS_DESC_MAP,
      ORDER_STATUS: config.ORDER_STATUS
    };
  },
  components: {
    simpleButton,
    qicon
  },
  computed: {
    showBottomBar() {
      return (
        [
          this.ORDER_STATUS.WAIT_PAY,
          this.ORDER_STATUS.EXPRESSED,
          this.ORDER_STATUS.FETCHED,
          this.ORDER_STATUS.CANCELED
        ].indexOf(this.status) != -1
      );
    }
  },
  methods: {
    onDetail() {
      this.$emit("detail");
    },
    onPay() {
      this.$emit("pay");
    },
    onAgain() {
      this.$emit("again");
    }
  }
};
</script>

<style scoped>
.eoi-container {
  width: 708rpx;
  border-radius: 20rpx;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.eoi-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 672rpx;
  padding: 18rpx 0 16rpx 0;
  border-bottom: 1px solid #e8e8e8;
}
.eoi-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 672rpx;
  padding: 10rpx 4rpx 10rpx 42rpx;
  box-sizing: border-box;
}
.eoi-bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 672rpx;
  font-size: 24rpx;
  padding: 6rpx 0 24rpx 0;
}
.eoi-top-left {
  display: flex;
  flex-direction: column;
}
.eoi-top-left > div:first-child {
  display: flex;
  align-items: center;
}
.eoi-top-left > div:last-child {
  margin-left: 42rpx;
  font-size: 24rpx;
  color: #828282;
}
.eoi-center-left {
  display: flex;
  font-size: 28rpx;
  color: #828282;
}
.eoi-center-left > text:first-of-type {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 320rpx;
}
.eoi-center-left > text:last-of-type {
  margin-left: 16rpx;
}
.eoi-center-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  font-size: 24rpx;
  color: #828282;
}
.eoi-bottom > div {
  display: flex;
  align-items: center;
}
.eoi-top-left-name {
  font-size: 28rpx;
  margin-left: 18rpx;
}
.eoi-top-right {
  font-size: 24rpx;
}
</style>