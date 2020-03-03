import utils from "@/utils/utils";
import paths from "@/static/paths";
let storePageOrders = {
  namespaced: true,
  state: {
    loaded: false,
    navbarTabConfig: {
      tabList: [
        {
          id: 1,
          text: "预订订单"
        },
        {
          id: 2,
          text: "送餐订单"
        }
      ],
      selectedId: 2
    },
    reserveOrderList: [
      {
        id: 1,
        status: 1,
        shopName: "苏园黄河路店",
        time: "01-20（周二） 09:00",
        personCount: "4人",
        room: "龙井问茶",
        reserveGold: "¥ 200",
        reserveGoldDeadline: "15分钟"
      },
      {
        id: 2,
        status: 2,
        shopName: "苏园黄河路店",
        time: "01-20（周二） 09:00",
        personCount: "4人",
        room: "龙井问茶",
        reserveGold: "¥ 200"
      },
      {
        id: 3,
        status: 3,
        shopName: "苏园黄河路店",
        time: "01-20（周二） 09:00",
        personCount: "4人",
        room: "龙井问茶",
        reserveGold: "¥ 200"
      }
    ],
    expressOrderList: [
      {
        id: 1,
        status: 1,
        shopName: "苏园黄河路店",
        time: "2020-01-20 11:10",
        foodDetail: "牛肉石锅拌饭+大酱汤 等2件",
        cost: "¥ 200",
        payDeadline: "15分钟"
      },
      {
        id: 2,
        status: 2,
        shopName: "苏园黄河路店",
        time: "2020-01-20 11:10",
        foodDetail: "牛肉石锅拌饭+大酱汤 等2件",
        cost: "¥ 200",
        payDeadline: "15分钟"
      },
      {
        id: 3,
        status: 3,
        shopName: "苏园黄河路店",
        time: "2020-01-20 11:10",
        foodDetail: "牛肉石锅拌饭+大酱汤 等2件",
        cost: "¥ 200",
        payDeadline: "15分钟"
      },
      {
        id: 4,
        status: 4,
        shopName: "苏园黄河路店",
        time: "2020-01-20 11:10",
        foodDetail: "牛肉石锅拌饭+大酱汤 等2件",
        cost: "¥ 200",
        payDeadline: "15分钟"
      }
    ]
  },
  getters: {
    getLoaded(state) {
      utils.log("getters getLoaded in storePageOrders, value: ", state.loaded);
      return state.loaded;
    },
    getSelectedId(state) {
      utils.log(
        "getters getSelectedId in storePageOrders, value: ",
        state.navbarTabConfig.selectedId
      );
      return state.navbarTabConfig.selectedId;
    },
    getOrderList(state, getters) {
      let selectedId = state.navbarTabConfig.selectedId;
      let resOrderList = [];
      if (selectedId === 1) {
        resOrderList = state.reserveOrderList;
      } else if (selectedId === 2) {
        resOrderList = state.expressOrderList;
      }
      return resOrderList;
    },
    getReserveOrderList(state) {
      utils.log(
        "getters getReserveOrderList in storePageOrders, value: ",
        state.reserveOrderList
      );
      return state.reserveOrderList;
    },
    getExpressOrderList(state) {
      utils.log(
        "getters getExpressOrderList in storePageOrders, value: ",
        state.expressOrderList
      );
      return state.expressOrderList;
    },
    getNavbarTabConfig(state) {
      utils.log(
        "getters getNavbarTabConfig in storePageOrders, value: ",
        state.navbarTabConfig
      );
      return state.navbarTabConfig;
    },
    getNavbarHeight: (state, getters) => {
      let res =
        getters["getNavbarContentHeight"] + getters["getNavbarStatusHeight"];
      utils.log("getters getNavbarHeight in storePageOrders, value: ", res);
      return res;
    },
    getNavbarContentHeight: (state, getters, rootState, rootGetters) => {
      let statusBarHeight = rootGetters["storeSysInfo/getStatusBarHeight"];
      let capsuleButtonInfo = rootGetters["storeSysInfo/getCapsuleButtonInfo"];
      let res =
        capsuleButtonInfo.height +
        (capsuleButtonInfo.top - statusBarHeight) * 2;
      utils.log(
        "getters getNavbarContentHeight in storePageOrders, value: ",
        res
      );
      return res;
    },
    getNavbarStatusHeight: (state, getters, rootState, rootGetters) => {
      let statusBarHeight = rootGetters["storeSysInfo/getStatusBarHeight"];
      utils.log(
        "getters getNavbarStatusHeight in storePageOrders, value: ",
        statusBarHeight
      );
      return statusBarHeight;
    }
  },
  actions: {
    actSelectTab({ commit }, id) {
      utils.log("actions actSelectTab in storePageOrders, id: ", id);
      commit("setTabSelectedId", id);
    }
  },
  mutations: {
    setTabSelectedId(state, id) {
      utils.log("mutations setTabSelectedId in storePageOrders, id: ", id);
      state.navbarTabConfig.selectedId = id;
    },
    setLoaded(state, val) {
      utils.log("mutations setLoaded in storePageOrders, val: ", val);
      state.loaded = val;
    }
  }
};

export default storePageOrders;
