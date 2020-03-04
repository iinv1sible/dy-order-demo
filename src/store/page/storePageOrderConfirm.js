import utils from "@/utils/utils";
import paths from "@/static/paths";
let storePageOrderConfirm = {
  namespaced: true,
  state: {
    method: 1 // 1 配送 2 自提
  },
  getters: {
    getMethod(state) {
      utils.log(
        "getters getMethod in storePageOrderConfirm, val: ",
        state.method
      );
      return state.method;
    }
  },
  mutations: {
    setMethod(state, method) {
      utils.log(
        "mutations setMethod in storePageOrderConfirm, method: ",
        state.method
      );
      state.method = method;
    }
  }
};

export default storePageOrderConfirm;
