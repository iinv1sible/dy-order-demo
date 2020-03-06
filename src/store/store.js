import storeSysInfo from "./storeSysInfo";
import storeSysStyles from "./storeSysStyles/storeSysStyles";
import storePages from "./page/storePages";
import storeGlobal from "./storeGlobal";

let store = {
  modules: {
    storeSysInfo,
    storeSysStyles,
    storePages,
    storeGlobal
  },
  state: {},
  mutations: {},
  getters: {},
  actions: {}
};
export default store;
