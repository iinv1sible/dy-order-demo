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
    showPayDetail: false,
    currentItemInDetailShow: "1",
    showItemDetail: false
  },
  mutations: {
    setSelectedCatId(state, id) {
      if (id !== state.selectedCategoryId) {
        state.selectedCategoryId = id;
        utils.log("mutations setSelectedCatId in storePageExpress, id: ", id);
      }
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
    }
  },
  getters: {
    getAllItems(state, getters, rootState, rootGetters) {
      let res = rootGetters["storeGlobal/getAllItems"];
      console.log(res);
      return res;
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
    getCartItemList(state, getters, rootState, rootGetters) {
      return rootGetters["storeGlobal/getCartItemList"];
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
      let cartItemList = getters.getCartItemList;
      funcs.addItem2Cart(
        obj.id,
        getters["getAllItems"],
        cartItemList,
        obj.success,
        obj.fail
      );
      commit("storeGlobal/setCartItemList", cartItemList, { root: true });
    },
    actRemoveItemFromCart({ dispatch, commit, state, getters }, obj) {
      utils.log(
        "actions actRemoveItemFromCart in storePageExpress, obj: ",
        obj
      );
      let cartItemList = getters.getCartItemList;
      funcs.removeItemFromCart(
        obj.id,
        getters["getAllItems"],
        cartItemList,
        obj.success,
        obj.fail
      );
      commit("storeGlobal/setCartItemList", cartItemList, { root: true });
    },
    actRemoveAllFromCart({ dispatch, commit, state, getters }) {
      utils.log("actions actRemoveAllFromCart in storePageExpress");
      let cartItemList = getters.getCartItemList;
      funcs.removeAllFromCart(getters["getAllItems"], cartItemList);
      commit("setShowPayDetail", false);
      commit("storeGlobal/setCartItemList", cartItemList, { root: true });
    }
  }
};

export default storePageExpress;
