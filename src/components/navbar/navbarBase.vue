<template>
  <div
    class="nb-bg"
    :style="{
      'padding-top': navbarStatusHeight ,
      height: navbarHeight 
    }"
  >
    <div class="nb-bar" :style="{ height: navbarContentHeight }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["navbarHeight", "navbarContentHeight", "navbarStatusHeight"]
};
</script>

<style scoped>
.nb-bg {
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}
.nb-bar {
  width: 100%;
}
</style>
