import utils from "@/utils/utils";
import paths from "@/static/paths";
//此订单数据为外送订单数据
let storePageOrderDetail = {
  namespaced: true,
  state: {
    orderId: 1
  },
  mutations: {
    setOrderId(state, val) {
      utils.log("mutations setOrderId in storePageOrderDetail, value: ", val);
      state.orderId = val;
    }
  },
  getters: {
    getOrder(state, getters, rootState, rootGetters) {
      let res = rootGetters["storeGlobal/getExpressOrderById"](state.orderId);
      utils.log("getters getOrder in storePageOrderDetail, value: ", res);
      return res;
    }
  }
};

export default storePageOrderDetail;
