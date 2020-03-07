import utils from "@/utils/utils";
import paths from "@/static/paths";
import config from "@/static/config";
import nativeMgr from "@/native/NativeMgr";
import dtu from "@/utils/dataTransferUtils";
let native = nativeMgr.getNative();
let storeGlobal = {
  namespaced: true,
  state: {
    baseUrl: "http://127.0.0.1:3000",
    cartItemList: [],
    currentShopId: -1, //当前选择店铺
    currentLocation: null, //定位信息
    currentShop: {},
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
      // 1: {
      //   id: 1,
      //   address: "秀东尚座",
      //   door: "B栋1920",
      //   receiver: {
      //     name: "陈颖颖",
      //     gender: config.GENDER_TYPE.FEMALE,
      //     contact: "13282250353"
      //   }
      // },
      // 2: {
      //   id: 2,
      //   address: "哈哈哈广场",
      //   door: "B栋1920",
      //   receiver: {
      //     name: "王先生",
      //     gender: config.GENDER_TYPE.MALE,
      //     contact: "13111111111"
      //   }
      // }
    }
  },
  actions: {
    async actGetShop({ commit, getters }) {
      utils.log("actions actGetShop in storeGlobal");
      let currentShopId = getters.getCurrentShopId;
      let currentLocation = getters.getCurrentLocation;
      if (!currentLocation) {
        //当前用户定位没有获取到 则获取到总店信息 并且锁住操作
        let shopMain = {
          id: 2,
          logo: "/static/icon/store.png",
          title: "这是总店",
          dist: 3.3,
          //distDesc: "距您2.2km",
          expressMinCost: 50,
          expressCost: 4,
          address: "金水区黄河路与南阳路交汇处西北角",
          busitime: "11:00-14:00，17:00-21:00",
          //expressDesc: "起送价￥ 50.00 · 配送费  ¥ 4.00起 ",
          bonusDesc: "优惠信息xxxxxxxxxxxxxxx",
          parkDesc: "餐厅楼下停车库，大量车位...",
          ticketSuppert: true,
          //ticketSupportDesc: "支持",
          isMain: false,
          isInExpressRange: false, //是否超出配送范围
          isInBusi: false //是否正在营业中
        };
        commit("setCurrentShop", shopMain);
      } else if (currentShopId != -1) {
        //如果设置了店铺id则根据店铺id获取店铺信息
        let shopById = {
          id: 1,
          logo: "/static/icon/store.png",
          title: "根据店铺id获取的店铺",
          dist: 2.2,
          //distDesc: "距您2.2km",
          expressMinCost: 50,
          expressCost: 4,
          address: "金水区黄河路与南阳路交汇处西北角",
          busitime: "11:00-14:00，17:00-21:00",
          //expressDesc: "起送价￥ 50.00 · 配送费  ¥ 4.00起 ",
          bonusDesc: "优惠信息xxxxxxxxxxxxxxx",
          parkDesc: "餐厅楼下停车库，大量车位...",
          ticketSuppert: true,
          //ticketSupportDesc: "支持",
          isMain: false,
          isInExpressRange: false, //是否超出配送范围
          isInBusi: false //是否正在营业中
        };
        commit("setCurrentShop", shopById);
      } else {
        ////若没有设置则根据定位获取最近的店铺信息
        let shopByLoc = {
          id: 3,
          logo: "/static/icon/store.png",
          title: "根据定位信息获取的店铺",
          dist: 3.3,
          //distDesc: "距您2.2km",
          expressMinCost: 50,
          expressCost: 4,
          address: "金水区黄河路与南阳路交汇处西北角",
          busitime: "11:00-14:00，17:00-21:00",
          //expressDesc: "起送价￥ 50.00 · 配送费  ¥ 4.00起 ",
          bonusDesc: "优惠信息xxxxxxxxxxxxxxx",
          parkDesc: "餐厅楼下停车库，大量车位...",
          ticketSuppert: true,
          //ticketSupportDesc: "支持",
          isMain: false,
          isInExpressRange: false, //是否超出配送范围
          isInBusi: false //是否正在营业中
        };
        commit("setCurrentShop", shopByLoc);
      }
    },
    async actGetLocation({ commit }, obj) {
      utils.log("actions actGetLocation in storeGlobal");
      try {
        native.showLoading();
        //查询是否授权对应scope
        //若没有授权则调用授权函数主动拉起授权
        if (!(await native.checkAuthorized("scope.userLocation"))) {
          await native.authorize("scope.userLocation"); //授权失败是直接reject 那么就是直接进入catch 则提示失败 也不需要去获取位置了
        }
        //走到这里必然授权成功 则去获取位置
        let res = await native.getLocation();
        commit("setCurrentLocation", res);
        //保存用户的地址 todo
        obj.success && obj.success(res);
      } catch (ex) {
        //如果失败则将当前位置置为空
        commit("setCurrentLocation", null);
        obj.fail && obj.fail();
      } finally {
        native.hideLoading();
        obj.complete && obj.complete();
      }
    },
    async actGetAddresses({ commit, getters }) {
      let fromDto = dto => {
        let res = {};
        dto.forEach(item => {
          res[item.id] = item;
        });
        return res;
      };

      //获取服务器数据转换后刷新本地数据
      utils.log("actions actGetAddresses in storeGlobal");
      native.showLoading();
      let res = await native.request(`${getters.baseUrl}/addresses`);
      native.hideLoading();
      utils.log("res: ", res);
      res = fromDto(res.data);
      commit("setAddresses", res);
    },
    async actAddAddress({ commit, getters }, obj) {
      utils.log("actions actAddAddress in storeGlobal obj", obj);
      let data = obj.data;
      native.showLoading();
      let res = await native.request({
        url: `${getters.baseUrl}/addresses`,
        method: "POST",
        data
      });
      native.hideLoading();
      obj.success && obj.success();
    },
    async actEditAddress({ commit, getters }, obj) {
      utils.log("actions actEditAddress in storeGlobal obj", obj);
      native.showLoading();
      let data = obj.data;
      console.log(data);
      let res = await native.request({
        url: `${getters.baseUrl}/addresses/${data.id}`,
        method: "PUT",
        data
      });
      native.hideLoading();
      obj.success && obj.success();
    }
  },
  mutations: {
    setCurrentShopId(state, id) {
      utils.log("mutations setCurrentShopId in storeGlobal, id: ", id);
      state.currentShopId = id;
    },
    setCurrentLocation(state, location) {
      utils.log(
        "mutations setCurrentLocation in storeGlobal, location: ",
        location
      );
      state.currentLocation = location;
    },
    setCurrentShop(state, shop) {
      utils.log("mutations setCurrentShop in storeGlobal, shop: ", shop);
      state.currentShop = shop;
    },
    setCartItemList(state, cartItemList) {
      utils.log(
        "mutations setCartItemList in storeGlobal, cartItemList: ",
        cartItemList
      );
      state.cartItemList = cartItemList;
    },
    setAddresses(state, addresses) {
      utils.log(
        "mutations setAddresses in storeGlobal, addresses: ",
        addresses
      );
      state.addresses = addresses;
    }
  },
  getters: {
    getCurrentShopId(state) {
      return state.currentShopId;
    },
    getCurrentLocation(state) {
      return state.currentLocation;
    },
    baseUrl(state) {
      return state.baseUrl;
    },
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
    getShopDetail(state, getters) {
      let shopDetail = state.currentShop;
      dtu.setShopDetailInfo(shopDetail);
      utils.log(
        "getters getShopDetail in storeGlobal, shopDetail: ",
        shopDetail
      );
      return shopDetail;
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
