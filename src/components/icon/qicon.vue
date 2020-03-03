<template>
  <div @click="onClick" :style="{ width: size }">
    <image mode="widthFix" class="icon-image" :src="path" />
  </div>
</template>

<script>
export default {
  props: ["size", "path"],
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.icon-image {
  display: block;
  width: 100%;
  height: auto;
}
</style>
