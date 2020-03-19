import utils from "@/utils/utils";
let storePageWebView = {
  namespaced: true,
  state: {
    url: ""
  },
  mutations: {
    setUrl(state, url) {
      utils.log("mutations setUrl in storePageWebView, url: ", state.url);
      state.url = url;
    }
  },
  getters: {
    getUrl(state) {
      utils.log("getters getUrl in storePageWebView, url: ", state.url);
      return state.url;
    }
  }
};
export default storePageWebView;
