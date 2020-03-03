<template>
  <navbar-base
    :navbarHeight="navbarHeight"
    :navbarContentHeight="navbarContentHeight"
    :navbarStatusHeight="navbarStatusHeight"
  >
    <div class="nt-container">
      <div class="nt-tab-container">
        <div v-for="item in tabList" :key="id">
          <tab-button
            :fontSize="fontSize"
            :iconSize="iconSize"
            :text="item.text"
            :lineSpace="lineSpace"
            :selected="item.id === selectedId"
            @click="handlerSelect(item.id)"
          ></tab-button>
        </div>
      </div>
    </div>
  </navbar-base>
</template>

<script>
import navbarBase from "@/components/navbar/navbarBase";
import tabButton from "@/components/button/tabButton";
export default {
  props: [
    "navbarHeight",
    "navbarContentHeight",
    "navbarStatusHeight",
    "fontSize",
    "iconSize",
    "tabList",
    "selectedId",
    "lineSpace"
  ],
  computed: {},
  components: {
    navbarBase,
    tabButton
  },
  methods: {
    handlerSelect(id) {
      this.$emit("select", id);
    }
  }
};
</script>

<style scoped>
.nt-container {
  background-color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 10.34px;
}
.nt-tab-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 220rpx;
}
</style>
