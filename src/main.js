import Vue from "vue";
import App from "./App";
import Vuex from "vuex";
import storeConf from "@/store/store";
import config from "@/static/config";
import "mpvue-weui/src/style/weui.css";

Vue.use(Vuex);
let store = new Vuex.Store(storeConf);
Vue.prototype.$store = store;
Vue.prototype.$store.dispatch("storeSysInfo/actInitSysInfo");
Vue.prototype.$store.commit(
  "storeSysStyles/setCurrentSysStyle",
  config.sysStyles.yellow
);

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue(App);
app.$mount();
