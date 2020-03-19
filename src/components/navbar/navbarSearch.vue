<template>
  <navbar-base
    :navbarHeight="navbarHeight"
    :navbarContentHeight="navbarContentHeight"
    :navbarStatusHeight="navbarStatusHeight"
  >
    <div class="ns-container" :style="{width:navbarMenuButtonLeft+'px'}">
      <div class="ns-back">
        <qicon @click="back" path="/static/icon/arrow-left.png" size="25px"></qicon>
      </div>

      <div class="ns-search-parent">
        <icon class="ns-search-icon" type="search" size="15px"></icon>
        <input
          class="ns-search-input"
          :placeholder="text"
          placeholder-style="color:#E1E1E1"
          type="text"
        />
      </div>
    </div>
  </navbar-base>
</template>

<script>
import navbarBase from "@/components/navbar/navbarBase";
import qicon from "@/components/icon/qicon";
export default {
  props: [
    "navbarHeight",
    "navbarContentHeight",
    "navbarStatusHeight",
    "navbarMenuButtonLeft",
    "text"
  ],
  components: {
    navbarBase,
    qicon
  },
  methods: {
    back() {
      console.log("back");
      this.$emit("back");
    }
  }
};
</script>

<style scoped>
.ns-container {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10rpx;
  box-sizing: border-box;
}
.ns-search-parent {
  background-color: #f7f7f7;
  flex: auto;
  font-size: 13px;
  height: 80%;
  margin-left: 10rpx;
  border-radius: 10rpx;
  display: flex;
  align-items: center;
  padding-left: 20rpx;
}
.ns-search-input {
  box-sizing: border-box;
  padding: 0 20rpx;
  flex: auto;
  height: 100%;
}
</style>
