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
    shopDetail: {
      iconPath: "/static/icon/store.png",
      name: "苏园黄河路店",
      busitime: "外送时间：10:30-19:30  ",
      cost: "起送价：￥ 50.00 丨 配送费  ¥ 4.00"
    },
    categories: {
      0: {
        id: "0",
        iconPath: "/static/icon/fire.png",
        text: "热销",
        foodList: ["1", "2", "3", "4", "5", "6", "7", "8"]
      },
      1: {
        id: "1",
        iconPath: "/static/icon/bonus.png",
        text: "优惠",
        foodList: ["1", "2", "3", "4", "5"]
      },
      2: {
        id: "2",
        text: "特色菜系",
        foodList: []
      },
      3: {
        id: "3",
        text: "全球美食",
        newAdded: 1,
        foodList: []
      }
    },
    selectedCategoryId: "0",
    allItems: {
      1: {
        id: "1",
        iconPath: "/static/icon/food.jpg",
        nameText: "五香烤鸡",
        infoText: "我是优质茶叶浸泡的一颗蛋...",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 2
      },
      2: {
        id: "2",
        iconPath: "/static/icon/food.jpg",
        nameText: "五香茶叶蛋",
        infoText: "我是优质茶叶浸泡的一颗蛋...",
        costText: "¥ 4.5",
        price: 4.5,
        suit: ["1", "3", "4"],
        storage: 2
      },
      3: {
        id: "3",
        iconPath: "/static/icon/food.jpg",
        nameText: "五香烤鸭",
        infoText: "我是优质茶叶浸泡的一颗蛋...",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      },
      4: {
        id: "4",
        iconPath: "/static/icon/food.jpg",
        nameText: "五香烤牛肉",
        infoText: "我是优质茶叶浸泡的一颗蛋...",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      },
      5: {
        id: "5",
        iconPath: "/static/icon/food.jpg",
        nameText: "五香烤火腿肠",
        infoText: "我是优质茶叶浸泡的一颗蛋...",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      },
      6: {
        id: "6",
        iconPath: "/static/icon/food.jpg",
        nameText: "五香烤大白菜",
        infoText: "我是优质茶叶浸泡的一颗蛋...",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      },
      7: {
        id: "7",
        iconPath: "/static/icon/food.jpg",
        nameText: "五香烤鱼",
        infoText: "我是优质茶叶浸泡的一颗蛋...",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      },
      8: {
        id: "8",
        iconPath: "/static/icon/food.jpg",
        nameText: "五香烤猪肉",
        infoText: "我是优质茶叶浸泡的一颗蛋...",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      }
    },
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
    getCurrentItemInDetailShow(state) {
      let allItems = state.allItems;
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
    getShopDetail(state) {
      utils.log(
        "getters getShopDetail in storePageExpress, value: ",
        state.shopDetail
      );
      return state.shopDetail;
    },
    getSelectedCategoryId(state) {
      utils.log(
        "getters getSelectedCategoryId in storePageExpress, value: ",
        state.selectedCategoryId
      );
      return state.selectedCategoryId;
    },
    getCategories(state) {
      utils.log(
        "getters getCategories in storePageExpress, value: ",
        state.categories
      );
      return state.categories;
    },
    getSelectedCategory(state) {
      let categories = state.categories;
      let selectedCategoryId = state.selectedCategoryId;
      let targetCategory = categories[selectedCategoryId];
      utils.log(
        "getters getSelectedCategory in storePageExpress, value: ",
        targetCategory
      );
      return targetCategory;
    },
    getCartItemList(state) {
      let res = state.cartItemList;
      let allItems = state.allItems;
      res.forEach(item => (item.detail = allItems[item.id]));
      utils.log(
        "getters getCartItemList in storePageExpress, cartItemList: ",
        res
      );
      return res;
    },
    getFoodListByCurrentSelectedCategory(state) {
      let categories = state.categories;
      let allItems = state.allItems;
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
    actAddItem2Cart({ dispatch, commit, state }, obj) {
      utils.log("actions actAddItem2Cart in storePageExpress, obj: ", obj);
      funcs.addItem2Cart(
        obj.id,
        state.allItems,
        state.cartItemList,
        obj.success,
        obj.fail
      );
      commit("setCartItemList", state.cartItemList);
      dispatch("actUpdateOrder");
    },
    actRemoveItemFromCart({ dispatch, commit, state }, obj) {
      utils.log(
        "actions actRemoveItemFromCart in storePageExpress, obj: ",
        obj
      );
      funcs.removeItemFromCart(
        obj.id,
        state.allItems,
        state.cartItemList,
        obj.success,
        obj.fail
      );
      commit("setCartItemList", state.cartItemList);
      dispatch("actUpdateOrder");
    },
    actRemoveAllFromCart({ dispatch, commit, state }) {
      utils.log("actions actRemoveAllFromCart in storePageExpress");
      funcs.removeAllFromCart(state.allItems, state.cartItemList);
      commit("setShowPayDetail", false);
      commit("setCartItemList", state.cartItemList);
      dispatch("actUpdateOrder");
    },
    actUpdateOrder({ commit, state }) {
      let cartItemList = state.cartItemList;
      let order = state.order;
      let allItems = state.allItems;
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
