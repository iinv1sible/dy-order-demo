import fetch from "@/utils/fetch";
import config from "@/static/config";
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
  mutations: {},
  getters: {},
  actions: {}
};
export default store;
