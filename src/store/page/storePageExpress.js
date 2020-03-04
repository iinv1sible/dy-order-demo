import utils from "@/utils/utils";
import paths from "@/static/paths";
let funcs = {
  addItem2Cart(id, allItems, cartItemList, success, fail) {
    let item = allItems[id];
    if (item.storage <= 0) {
      if (fail) fail({ msg: "商品数量不足" });
      return;
    }
    item.storage--;
    let index = cartItemList.findIndex(cartItem => cartItem.id === id);
    if (index != -1) {
      cartItemList[index].count++;
    } else {
      cartItemList.push({
        id: item.id,
        count: 1
      });
    }
  },
  removeItemFromCart(id, allItems, cartItemList, success, fail) {
    let item = allItems[id];
    let index = cartItemList.findIndex(cartItem => cartItem.id === id);
    if (index != -1) {
      cartItemList[index].count--;
      item.storage++;
      if (cartItemList[index].count <= 0) {
        cartItemList.splice(index, 1);
      }
    }
    if (success)
      success({
        msg: "操作成功",
        isEmpty: cartItemList.length <= 0
      });
  },
  removeAllFromCart(allItems, cartItemList, success, fail) {
    let copyCartItemList = cartItemList.slice();
    copyCartItemList.forEach(cartItem => {
      let count = cartItem.count;
      for (let i = 0; i < count; ++i) {
        funcs.removeItemFromCart(cartItem.id, allItems, cartItemList);
      }
    });
  }
};
let storePageExpress = {
  namespaced: true,
  state: {
    selectedCategoryId: "0",
    cartItemList: [],
    showPayDetail: false,
    currentItemInDetailShow: "1",
    showItemDetail: false,
    order: {
      origin: 0,
      now: 0,
      expressCost: 0
    }
  },
  mutations: {
    setSelectedCatId(state, id) {
      if (id !== state.selectedCategoryId) {
        state.selectedCategoryId = id;
        utils.log("mutations setSelectedCatId in storePageExpress, id: ", id);
      }
    },
    setCartItemList(state, cartItemList) {
      utils.log(
        "mutations setCartItemList in storePageExpress, cartItemList: ",
        cartItemList
      );
      state.cartItemList = cartItemList;
    },
    setCurrentItemInDetailShow(state, id) {
      state.currentItemInDetailShow = id;
      utils.log(
        "mutations setCurrentItemInDetailShow in storePageExpress, id: ",
        id
      );
    },
    setShowItemDetail(state, show) {
      if (show !== state.showItemDetail) {
        state.showItemDetail = show;
        utils.log(
          "mutations setShowItemDetail in storePageExpress, show: ",
          show
        );
      }
    },
    setShowPayDetail(state, show) {
      if (show !== state.showPayDetail) {
        state.showPayDetail = show;
        utils.log(
          "mutations setShowPayDetail in storePageExpress, show: ",
          show
        );
      }
    },
    setOrder(state, order) {
      utils.log("mutations setOrder in storePageExpress, order: ", order);
      state.order = order;
    }
  },
  getters: {
    getAllItems(state, getters, rootState, rootGetters) {
      let res = rootGetters["storeGlobal/getAllItems"];
      console.log(res);
      return res;
    },
    getOrder(state) {
      utils.log("getters getOrder in storePageExpress, order: ", state.order);
      return state.order;
    },
    getShowPayDetail(state) {
      utils.log(
        "getters getShowPayDetail in storePageExpress, showPayDetail: ",
        state.showPayDetail
      );
      return state.showPayDetail;
    },
    getShowItemDetail(state) {
      utils.log(
        "getters getShowItemDetail in storePageExpress, showItemDetail: ",
        state.showItemDetail
      );
      return state.showItemDetail;
    },
    getCurrentItemInDetailShow(state, getters) {
      let allItems = getters["getAllItems"];
      let res = allItems[state.currentItemInDetailShow];
      res.suitItems = [];
      if (res.suit) {
        res.suitItems = res.suit.map(suitId => allItems[suitId]);
      }
      utils.log(
        "getters getCurrentItemInDetailShow in storePageExpress, currentItemInDetailShow: ",
        res
      );
      return res;
    },
    getShopDetail(state, getters, rootState, rootGetters) {
      return rootGetters["storeGlobal/getShopDetail"];
    },
    getSelectedCategoryId(state) {
      utils.log(
        "getters getSelectedCategoryId in storePageExpress, value: ",
        state.selectedCategoryId
      );
      return state.selectedCategoryId;
    },
    getCategories(state, getters, rootState, rootGetters) {
      let res = rootGetters["storeGlobal/getCategories"];
      return res;
    },
    getSelectedCategory(state, getters) {
      let categories = getters["getCategories"];
      let selectedCategoryId = state.selectedCategoryId;
      let targetCategory = categories[selectedCategoryId];
      utils.log(
        "getters getSelectedCategory in storePageExpress, value: ",
        targetCategory
      );
      return targetCategory;
    },
    getCartItemList(state, getters) {
      let res = state.cartItemList;
      let allItems = getters["getAllItems"];
      res.forEach(item => (item.detail = allItems[item.id]));
      utils.log(
        "getters getCartItemList in storePageExpress, cartItemList: ",
        res
      );
      return res;
    },
    getFoodListByCurrentSelectedCategory(state, getters) {
      let categories = getters["getCategories"];
      console.log(categories);
      let allItems = getters["getAllItems"];
      let selectedCategoryId = state.selectedCategoryId;
      let targetCategory = categories[selectedCategoryId];
      let targetFoodList = targetCategory.foodList.map(
        foodId => allItems[foodId]
      );

      utils.log(
        "getters getFoodListByCurrentSelectedCategory in storePageExpress, targetFoodList: ",
        targetFoodList
      );
      return targetFoodList;
    }
  },
  actions: {
    actAddItem2Cart({ dispatch, commit, state, getters }, obj) {
      utils.log("actions actAddItem2Cart in storePageExpress, obj: ", obj);
      funcs.addItem2Cart(
        obj.id,
        getters["getAllItems"],
        state.cartItemList,
        obj.success,
        obj.fail
      );
      commit("setCartItemList", state.cartItemList);
      dispatch("actUpdateOrder");
    },
    actRemoveItemFromCart({ dispatch, commit, state, getters }, obj) {
      utils.log(
        "actions actRemoveItemFromCart in storePageExpress, obj: ",
        obj
      );
      funcs.removeItemFromCart(
        obj.id,
        getters["getAllItems"],
        state.cartItemList,
        obj.success,
        obj.fail
      );
      commit("setCartItemList", state.cartItemList);
      dispatch("actUpdateOrder");
    },
    actRemoveAllFromCart({ dispatch, commit, state, getters }) {
      utils.log("actions actRemoveAllFromCart in storePageExpress");
      funcs.removeAllFromCart(getters["getAllItems"], state.cartItemList);
      commit("setShowPayDetail", false);
      commit("setCartItemList", state.cartItemList);
      dispatch("actUpdateOrder");
    },
    actUpdateOrder({ commit, state, getters }) {
      let cartItemList = state.cartItemList;
      let order = state.order;
      let allItems = getters["getAllItems"];
      let origin = 0;
      cartItemList.forEach(cartItem => {
        origin += allItems[cartItem.id].price * cartItem.count;
      });
      let now = origin;
      let expressCost = 5;
      commit("setOrder", {
        origin,
        now,
        expressCost
      });
    }
  }
};

export default storePageExpress;
