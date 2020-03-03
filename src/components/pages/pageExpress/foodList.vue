<template>
  <div class="fl-container">
    <div class="fl-category">
      <div v-for="item in categories" :key="id">
        <tab-button-side
          :selected="item.id === selectedCategory.id"
          :text="item.text"
          :iconPath="item.iconPath"
          :newAdded="item.newAdded"
          @click="select(item.id)"
        ></tab-button-side>
      </div>
    </div>
    <div class="fl-food-list">
      <div class="fl-food-list-title">
        <text>{{selectedCategory.text}}</text>
      </div>
      <scroll-view :scroll-top="scrollTop" :scroll-y="true" class="fl-food-list-list">
        <div class="fl-food-item" v-for="food in foodList" :key="id">
          <food-item
            @click="onFoodSelect"
            @add="onAdd"
            :iconPath="food.iconPath"
            :nameText="food.nameText"
            :infoText="food.infoText"
            :costText="food.costText"
            :storage="food.storage"
            :id="food.id"
          ></food-item>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import tabButtonSide from "@/components/pages/pageExpress/tabButtonSide";
import foodItem from "@/components/pages/pageExpress/foodItem";
export default {
  props: ["categories", "foodList", "selectedCategory"],
  components: {
    tabButtonSide,
    foodItem
  },
  data() {
    return {
      scrollTop: 0
    };
  },
  methods: {
    select(id) {
      this.$emit("select", id);
      this.scrollTop = -1;
      this.scrollTop = 0;
    },
    onFoodSelect(id) {
      this.$emit("foodSelect", id);
    },
    onAdd(id) {
      this.$emit("add", id);
    }
  }
};
</script>

<style scoped>
.fl-container {
  width: 750rpx;
  height: 1000rpx;
  display: flex;
}
.fl-category {
  width: 180rpx;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.fl-food-list {
  margin-left: 1px;
  flex: auto;
  height: 100%;
}
.fl-food-list-title {
  width: 100%;
  height: 90rpx;
  display: flex;
  align-items: center;
  padding-left: 20rpx;
  color: #5b5b5b;
  font-size: 28rpx;
  background-color: #fff;
}
.fl-food-list-list {
  height: 100%;
}
.fl-food-item {
  margin-bottom: 1px;
}
</style>