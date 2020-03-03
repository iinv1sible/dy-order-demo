import storeSysStyleBlue from "./storeSysStyleBlue";
import storeSysStyleYellow from "./storeSysStyleYellow";
import utils from "@/utils/utils";
import config from "@/static/config";
let storeSysStyles = {
  namespaced: true,
  modules: {
    storeSysStyleBlue,
    storeSysStyleYellow
  },
  state: {
    currentSysStyle: null,
    currentSysStyleName: ""
  },
  mutations: {
    setCurrentSysStyle(state, name) {
      state.currentSysStyle = state[`storeSysStyle${name}`];
      state.currentSysStyleName = name;
      utils.log(
        "mutation in storeSysStyles ---> value of state currentSysStyle: ",
        state.currentSysStyle
      );
    }
  },
  getters: {
    getCurrentSysStyle(state) {
      utils.log(
        "getter getCurrentSysStyle in storeSysStyles ---> get currentSysStyle: ",
        state.currentSysStyle
      );
      return state.currentSysStyle;
    },
    getAllSysStylesNameArr(state) {
      let res = [...Object.values(config.sysStyles)];
      utils.log("getter getAllSysStyles in storeSysStyles ---> value: ", res);
      return res;
    },
    getCurrentSysStyleName(state) {
      utils.log(
        "getter getCurrentSysStyleName in storeSysStyles ---> value: ",
        state.currentSysStyleName
      );
      return state.currentSysStyleName;
    }
  }
};

export default storeSysStyles;
