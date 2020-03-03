import fetch from "@/utils/fetch";
import config from "@/static/config";
import storeSysInfo from "./storeSysInfo";
import storeSysStyles from "./storeSysStyles/storeSysStyles";
import storePages from "./page/storePages";

let store = {
  modules: {
    storeSysInfo,
    storeSysStyles,
    storePages
  },
  mutations: {},
  getters: {},
  actions: {}
};
export default store;
