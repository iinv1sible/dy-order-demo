<template>
  <div>
    <navbar-search
      @back="back"
      :navbarHeight="defaultNavbarHeight + 'px'"
      :navbarContentHeight="defaultNavbarContentHeight + 'px'"
      :navbarStatusHeight="defaultNavbarStatusHeight + 'px'"
      :navbarMenuButtonLeft="capsuleButtonInfo.left"
      :text="text"
    ></navbar-search>
  </div>
</template>

<script>
import navbarSearch from "@/components/navbar/navbarSearch";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  props: ["text"],
  components: {
    navbarSearch
  },
  computed: {
    ...mapGetters("storeSysInfo", {
      defaultNavbarHeight: "getDefaultNavbarHeight",
      defaultNavbarContentHeight: "getDefaultNavbarContentHeight",
      defaultNavbarStatusHeight: "getDefaultNavbarStatusHeight",
      capsuleButtonInfo: "getCapsuleButtonInfo"
    })
  },
  methods: {
    back() {
      this.$emit("back");
    }
  }
};
</script>

<style>
</style>