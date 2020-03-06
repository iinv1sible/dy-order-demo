import nativeMgr from "../native/NativeMgr";
let native = nativeMgr.getNative();
import utils from "@/utils/utils";

let storeSysInfo = {
  namespaced: true,
  state: {
    screenWidth: 0,
    statusBarHeight: 0,
    capsuleButtonInfo: {
      height: 0,
      top: 0,
      right: 0,
      width: 0
    }
  },
  mutations: {
    setStatusBarHeight(state, value) {
      utils.log("mutations setStatusBarHeight in storeSysInfo, value: ", value);
      state.statusBarHeight = value;
    },
    setCapsuleButtonInfo(state, value) {
      utils.log(
        "mutations setCapsuleButtonInfo in storeSysInfo, value: ",
        value
      );
      state.capsuleButtonInfo = value;
    },
    setStatusBarHeightAndCapsuleButtonInfo(state, obj) {
      utils.log(
        "mutations setStatusBarHeightAndCapsuleButtonInfo in storeSysInfo, value: ",
        obj.statusBarHeight,
        obj.capsuleButtonInfo
      );
      state.statusBarHeight = obj.statusBarHeight;
      state.capsuleButtonInfo = obj.capsuleButtonInfo;
      state.screenWidth = obj.screenWidth;
    }
  },
  getters: {
    getScreenWidth(state) {
      utils.log(
        "getters getScreenWidth in storeSysInfo, value: ",
        state.screenWidth
      );
      return state.screenWidth;
    },
    getStatusBarHeight(state) {
      return state.statusBarHeight;
    },
    getCapsuleButtonInfo(state) {
      utils.log(
        "getters getCapsuleButtonInfo in storeSysInfo, value: ",
        state.capsuleButtonInfo
      );
      return state.capsuleButtonInfo;
    },
    getDefaultNavbarHeight: (state, getters) => {
      let res =
        getters["getDefaultNavbarContentHeight"] +
        getters["getDefaultNavbarStatusHeight"];
      utils.log("getters getDefaultNavbarHeight in storeSysInfo, value: ", res);
      return res;
    },
    getDefaultNavbarContentHeight: (state, getters) => {
      let statusBarHeight = getters["getStatusBarHeight"];
      let capsuleButtonInfo = getters["getCapsuleButtonInfo"];
      let res =
        capsuleButtonInfo.height +
        (capsuleButtonInfo.top - statusBarHeight) * 2;
      utils.log(
        "getters getDefaultNavbarContentHeight in storeSysInfo, value: ",
        res
      );
      return res;
    },
    getDefaultNavbarStatusHeight: (state, getters) => {
      let statusBarHeight = getters["getStatusBarHeight"];
      utils.log(
        "getters getDefaultNavbarStatusHeight in storeSysInfo, value: ",
        statusBarHeight
      );
      return statusBarHeight;
    }
  },
  actions: {
    async fetchStatusBarHeightAndCapsuleButtonInfo({ commit }) {
      let sysInfo = await native.fetchSystemInfo();
      let capsuleButtonInfo = native.fetchCapsuleButtonInfo();
      utils.log(
        "actions fetchStatusBarHeightAndCapsuleButtonInfo in storeSysInfo, value: ",
        sysInfo,
        capsuleButtonInfo
      );
      commit("setStatusBarHeightAndCapsuleButtonInfo", {
        screenWidth: sysInfo.screenWidth,
        statusBarHeight: sysInfo.statusBarHeight,
        capsuleButtonInfo: {
          top: capsuleButtonInfo.top,
          height: capsuleButtonInfo.height,
          width: capsuleButtonInfo.width,
          right: capsuleButtonInfo.right,
          left: capsuleButtonInfo.left
        }
      });
    },
    actInitSysInfo({ dispatch, commit }) {
      dispatch("fetchStatusBarHeightAndCapsuleButtonInfo");
    }
  }
};

export default storeSysInfo;
