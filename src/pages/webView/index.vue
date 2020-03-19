<template>
  <web-view :src="url"></web-view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("storePages/storePageWebView", {
      url: "getUrl"
    })
  }
};
</script>

<style>
</style>