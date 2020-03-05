import utils from "@/utils/utils";
import paths from "@/static/paths";
import config from "@/static/config";
let storeGlobal = {
  namespaced: true,
  state: {
    cartItemList: [],
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
        nameText: "五香茶叶蛋aaaaaaaaaaaaaaaaaaaaaa",
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
        status: config.ORDER_STATUS.WAIT_PAY, //1 待支付 2 待接单 3 已接单 4 已配送 5 已取餐 6 已取消
        no: "2115909017716318384",
        payMethod: config.ORDER_PAY_METHOD.ONLINE,
        createTime: "2019-09-21 12:10",
        expressMethod: config.ORDER_EXPRESS_METHOD.EXPRESS, // 是配送 还是 自取
        //配送信息
        expressInfo: {
          time: "尽快送达",
          addressId: 1, //对应用户的地址id
          who: config.ORDER_EXPRESS_WHO.SELF
        },
        packCost: 1,
        expressCost: 2,
        bonus: 2,
        itemList: [
          {
            id: 1,
            count: 2
          },
          {
            id: 2,
            count: 4
          }
        ],
        note: "这里是备注信息", //订单备注信息
        totalCost: 10.0
      }
    ],
    addresses: {
      1: {
        id: 1,
        address: "秀东尚座",
        door: "B栋1920",
        receiver: {
          name: "陈颖颖",
          gender: config.GENDER_TYPE.FEMALE,
          contact: "13282250353"
        }
      },
      2: {
        id: 2,
        address: "哈哈哈广场",
        door: "B栋1920",
        receiver: {
          name: "王先生",
          gender: config.GENDER_TYPE.MALE,
          contact: "13111111111"
        }
      }
    }
  },
  mutations: {
    setCartItemList(state, cartItemList) {
      utils.log(
        "mutations setCartItemList in storeGlobal, cartItemList: ",
        cartItemList
      );
      state.cartItemList = cartItemList;
    }
  },
  getters: {
    //根据购物车信息将价钱计算完毕 当订单已经下单之后则由服务器返回价格信息 客户端不再计算
    getCartCost(state, getters) {
      utils.log("getters getCartCost in storeGlobal, cartItemList ");
      let cartItemList = getters.getCartItemList;
      let allItems = getters.getAllItems;
      let origin = 0;
      cartItemList.forEach(cartItem => {
        origin += allItems[cartItem.id].price * cartItem.count;
      });
      let now = origin;
      let expressCost = 5;
      let packCost = 1;
      let bonus = 2;
      let expressCostDesc = `¥ ${expressCost}`;
      let packCostDesc = `¥ ${packCost}`;
      let bonusDesc = `- ¥${bonus}`;
      let totalCostDesc = `¥ ${now}`;

      //同时算出优惠 配送费 和包装费
      let res = {
        origin,
        now,
        expressCost,
        packCost,
        bonus,
        expressCostDesc,
        packCostDesc,
        bonusDesc,
        totalCostDesc
      };
      return res;
    },
    getCartItemList(state, getters) {
      utils.log("getters getCartItemList in storeGlobal, cartItemList ");
      let res = state.cartItemList;
      let allItems = getters["getAllItems"];
      res.forEach(item => {
        item.detail = allItems[item.id];
        item.countDesc = `x ${item.count}`;
        item.costDesc = `¥ ${item.count * item.detail.price}`;
      });
      utils.log("res ", res);
      return res;
    },
    getCartItemListWithCost(state, getters) {
      let cartItemList = getters["getCartItemList"];
      let cartCost = getters["getCartCost"];
      let res = {
        cartItemList,
        cartCost
      };
      utils.log("getters getCartItemListWithCost in storeGlobal, res ", res);
      return res;
    },
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
    getItemById: state => id => {
      utils.log("getters getItemById in storeGlobal, value: ", id);
      return state.allItems[id];
    },
    getCategories(state) {
      utils.log(
        "getters getCategories in storeGlobal, value: ",
        state.categories
      );
      return state.categories;
    },
    getExpressOrderById: (state, getters) => id => {
      let index = state.expressOrderList.findIndex(order => order.id === id);
      let res = getters.getExpressDetailedOrder(state.expressOrderList[index]);
      utils.log("getters getExpressOrderById in storeGlobal, value: ", res);
      return res;
    },
    expressOrderList(state, getters) {
      utils.log("getters expressOrderList in storeGlobal");
      let res = state.expressOrderList;

      let mapOrderList2DetailedOrderList = orderList => {
        return orderList.map(order => getters.getExpressDetailedOrder(order));
      };

      utils.log("res", res);
      return mapOrderList2DetailedOrderList(res);
    },
    getExpressDetailedOrder: (state, getters) => order => {
      utils.log("getters getExpressDetailedOrder in storeGlobal ");
      //店铺信息
      let setShopDetail = order => {
        order.shopDetail = getters.getShopDetail;
      };
      //地址信息
      let setAddressDetail = order => {
        if (order.expressMethod !== config.ORDER_EXPRESS_METHOD.EXPRESS) return;
        let addressId = order.expressInfo.addressId;
        order.expressInfo.address = getters.getAddressById(addressId);
      };
      //货品信息
      let setItemDetail = order => {
        let itemList = order.itemList;
        itemList.forEach(item => {
          item.detail = getters.getItemById(item.id);
          item.countDesc = `x ${item.count}`;
          item.costDesc = `¥ ${item.count * item.detail.price}`;
        });
        //设置货品详情描述
        let desc = "";
        let count = 0;
        itemList.forEach(item => {
          if (count++ !== 0) desc += ",";
          desc += item.detail.nameText;
        });
        order.foodNumDesc = ` 等${itemList.length}件`;
        order.foodDetailDesc = desc;
      };

      //设置订单总价描述
      let setTotalCostDesc = order => {
        order.totalCostDesc = `¥ ${order.totalCost}`;
      };

      //设置订单其余信息
      let setOther = order => {
        order.packCostDesc = order.packCost ? `¥ ${order.packCost}` : undefined;
        order.expressCostDesc = order.expressCost
          ? `¥ ${order.expressCost}`
          : undefined;
        order.bonusDesc = order.bonus ? `- ¥${order.bonus}` : undefined;
      };

      setShopDetail(order);
      setAddressDetail(order);
      setItemDetail(order);
      setTotalCostDesc(order);
      setOther(order);
      return order;
    },
    getAddresses(state) {
      let res = state.addresses;
      utils.log("getters getAddresses in storeGlobal res ", res);
      return res;
    },
    getAddressList(state, getters) {
      let setGenderDesc = address => {
        address.receiver.genderDesc =
          config.GENDER_TYPE_DESC_MAP[address.receiver.gender];
      };
      let addressList = Object.values(getters.getAddresses);
      addressList.forEach(address => setGenderDesc(address));
      utils.log(
        "getters getAddressList in storeGlobal addressList ",
        addressList
      );
      return addressList;
    },
    getAddressById: (state, getters) => id => {
      utils.log("getters getAddressById in storeGlobal ");
      let addresses = getters.getAddresses;
      let res = addresses[id];
      utils.log("res ", res);
      return res;
    }
  }
};
export default storeGlobal;
