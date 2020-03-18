<template>
  <div>
    <pano :autoinit="false">
      <cover-view @click="handlerTap" class="pano-cv" :style="styleObjCv"></cover-view>
    </pano>
  </div>
</template>

<script>
let wxPano = requirePlugin("wxPano");
import { mapGetters, mapMutations, mapActions } from "vuex";
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
import utils from "@/utils/utils";
let timerId = null;
export default {
  data() {
    return {
      pageScrollTop: 0
    };
  },
  onPageScroll(e) {
    this.pageScrollTop = e.scrollTop;
  },
  mounted() {
    this.initVrPano();
  },
  computed: {
    pageScrollTop() {
      return this.pageScrollTop;
    },
    styleObjCv() {
      return utils.styles({
        top: -this.pageScrollTop + "px",
        width: this.screenWidth + "px",
        height: this.screenWidth * 0.7 + "px"
      });
    },
    ...mapGetters("storeSysInfo", {
      screenWidth: "getScreenWidth"
    })
  },
  methods: {
    initVrPano() {
      wxPano.onReady = () => {
        wxPano.disableTouch();
        let originLookAt = wxPano.getCameraLookAt();
        let originLookAtX = originLookAt.x;
        let originLookAtY = originLookAt.y;
        //旋转
        if (timerId) clearInterval(timerId);
        timerId = setInterval(() => {
          originLookAtX += 0.0005;
          wxPano.setCameraLookAt({
            x: originLookAtX,
            y: 0.5
          });
        }, 60);
      };
      wxPano.config({
        panolist: [
          {
            name: "aaa",
            src: "https://qiniuyun8.zhidianfan.com/quanjingtu20200317002.jpeg",
            infospots: []
          }
        ],
        request: wx.request,
        loader: "GLLoader",
        entryname: "aaa",
        width: this.screenWidth,
        height: this.screenWidth * 0.7
      });
    },
    handlerTap() {
      console.log("handlerTap");
      native.nav2("/pages/vr/main");
    },
    handlerVrClick() {
      // console.log("click !!!");
      // native.nav2("/pages/vr/main");
    },
    handlerClickCv() {
      console.log("handlerClickCv");
      native.nav2("/pages/vr/main");
    }
  }
};
</script>

<style scoped>
.pano-cv {
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
}
</style>