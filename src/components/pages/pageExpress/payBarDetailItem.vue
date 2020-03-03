<template>
  <div class="pbdi-container">
    <text class="pbdi-name">{{name}}</text>
    <text class="pbdi-cost">¥{{cost}}</text>
    <div @click="onMinus" class="pbdi-minus">
      <qicon path="/static/icon/minus.png" size="40rpx"></qicon>
    </div>
    <text class="pbdi-count">{{count}}</text>
    <div @click="onAdd" class="pbdi-add">
      <qicon path="/static/icon/add.png" size="40rpx"></qicon>
    </div>
  </div>
</template>

<script>
import qicon from "@/components/icon/qicon";
export default {
  props: ["name", "count", "price", "id"],
  components: {
    qicon
  },
  computed: {
    cost() {
      return this.count * this.price;
    }
  },
  methods: {
    onMinus() {
      this.$emit("minus", this.id);
    },
    onAdd() {
      this.$emit("add", this.id);
    }
  }
};
</script>

<style scoped>
.pbdi-container {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 26rpx;
}
.pbdi-name {
  font-size: 28rpx;
  color: #020202;
  margin-left: 42rpx;
}
.pbdi-cost {
  font-size: 32rpx;
  color: #df0902;
  flex: auto;
  text-align: right;
  font-weight: bold;
}
.pbdi-count {
  font-size: 32rpx;
  color: #5b5b5b;
  margin-left: 14rpx;
}
.pbdi-minus {
  margin-left: 30rpx;
}
.pbdi-add {
  margin-left: 16rpx;
}
</style>