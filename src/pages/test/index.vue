<template>
  <div>
    <button @click="chooseLocation">选择位置</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    chooseLocation() {
      wx.chooseLocation({
        success(res) {
          console.log(res);
          // that.setData({
          //   hasLocation: true,
          //   location: formatLocation(res.longitude, res.latitude),
          //   locationAddress: res.address
          // });
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
