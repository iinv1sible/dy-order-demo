import utils from "@/utils/utils";
import paths from "@/static/paths";
let storeGlobal = {
  namespaced: true,
  state: {
    shopDetail: {
      iconPath: "/static/icon/store.png",
      name: "苏园黄河路店",
      busitime: "外送时间：10:30-19:30  ",
      cost: "起送价：￥ 50.00 丨 配送费  ¥ 4.00"
    },
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
    expressOrderList: [
      {
        id: 1,
        status: 1, //1 待支付 2 待接单 3 已接单 4 已配送 5 已取餐 6 已取消
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
      },
      {
        id: 5,
        status: 5,
        shopName: "苏园黄河路店",
        time: "2020-01-20 11:10",
        foodDetail: "牛肉石锅拌饭+大酱汤 等2件",
        cost: "¥ 200",
        payDeadline: "15分钟"
      },
      {
        id: 6,
        status: 6,
        shopName: "苏园黄河路店",
        time: "2020-01-20 11:10",
        foodDetail: "牛肉石锅拌饭+大酱汤 等2件",
        cost: "¥ 200",
        payDeadline: "15分钟"
      }
    ]
  },
  getters: {
    getShopDetail(state) {
      let res = state.shopDetail;
      utils.log("getters getShopDetail in storeGlobal, value: ", res);
      return res;
    },
    getAllItems(state) {
      let res = state.allItems;
      utils.log("getters getAllItems in storeGlobal, value: ", res);
      return res;
    },
    getCategories(state) {
      utils.log(
        "getters getCategories in storeGlobal, value: ",
        state.categories
      );
      return state.categories;
    },
    getExpressOrderById: state => id => {
      let index = state.expressOrderList.findIndex(order => order.id === id);
      let res = state.expressOrderList[index];
      utils.log("getters getExpressOrderById in storeGlobal, value: ", res);
      return res;
    },
    expressOrderList(state) {
      utils.log(
        "getters expressOrderList in storeGlobal, value: ",
        state.expressOrderList
      );
      return state.expressOrderList;
    }
  }
};
export default storeGlobal;
