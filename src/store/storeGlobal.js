import utils from "@/utils/utils";
import paths from "@/static/paths";
import config from "@/static/config";
import nativeMgr from "@/native/NativeMgr";
import dtu from "@/utils/dataTransferUtils";
import auth from "@/utils/auth";
import WXNative from "../native/WXNative";
import mathUtils from "@/utils/mathUtils";
let native = nativeMgr.getNative();
let storeGlobal = {
  namespaced: true,
  state: {
    userProfile: {
      phoneNumber: ""
    },
    activities: [
      {
        id: 3,
        path: "/static/icon/activity1.png",
        title: "是心动啊！3.18倒计时，4大爆款，14家酒店团宠你！",
        valid: "有效期 2020.1.15-2020.1.20"
      },
      {
        id: 2,
        path: "/static/icon/activity2.png",
        title: "致亲爱的你丨天港悦小厨全城寻找5名老铁，请你吃一个月的霸王餐",
        valid: "有效期 2020.1.15-2020.1.20"
      },
      {
        id: 1,
        path: "/static/icon/activity3.png",
        title: "好吃不贵丨天港禧悦“团餐”配送啦，复工从分食用餐开始",
        valid: "有效期 2020.1.15-2020.1.20"
      }
    ],
    baseUrl: "http://127.0.0.1:3000",
    cartItemList: [],
    currentShopId: -1, //当前选择店铺
    currentLocation: null, //定位信息
    currentShop: {},
    allItems: {
      1: {
        id: "1",
        iconPath:
          "https://qiniuyun8.zhidianfan.com/2f7f9407184248f6961899c386f30c5f.png?e=3161471776&token=7Qtn8gb2H4Jrup0BKvT781jKUxQDUrib7jqZVV2A:xVnqjCXY9VO7ShMLHZzlXIsCa3Q=",
        nameText: "案例菜品1",
        infoText: "仅案例展示菜品，暂不支持配送。",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 2
      },
      2: {
        id: "2",
        iconPath:
          "https://qiniuyun8.zhidianfan.com/810db9313124499c86a01bc303be2d13.png?e=3161471857&token=7Qtn8gb2H4Jrup0BKvT781jKUxQDUrib7jqZVV2A:AGOZVp5u0l1Zi3ZKu9fA2Ai4TGE=",
        nameText: "案例菜品2",
        infoText: "仅案例展示菜品，暂不支持配送。",
        costText: "¥ 4.5",
        price: 4.5,
        suit: ["1", "3", "4"],
        storage: 2
      },
      3: {
        id: "3",
        iconPath:
          "https://qiniuyun8.zhidianfan.com/2f7f9407184248f6961899c386f30c5f.png?e=3161471776&token=7Qtn8gb2H4Jrup0BKvT781jKUxQDUrib7jqZVV2A:xVnqjCXY9VO7ShMLHZzlXIsCa3Q=",
        nameText: "案例菜品3",
        infoText: "仅案例展示菜品，暂不支持配送。",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      },
      4: {
        id: "4",
        iconPath:
          "https://qiniuyun8.zhidianfan.com/810db9313124499c86a01bc303be2d13.png?e=3161471857&token=7Qtn8gb2H4Jrup0BKvT781jKUxQDUrib7jqZVV2A:AGOZVp5u0l1Zi3ZKu9fA2Ai4TGE=",
        nameText: "案例菜品4",
        infoText: "仅案例展示菜品，暂不支持配送。",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      },
      5: {
        id: "5",
        iconPath:
          "https://qiniuyun8.zhidianfan.com/2f7f9407184248f6961899c386f30c5f.png?e=3161471776&token=7Qtn8gb2H4Jrup0BKvT781jKUxQDUrib7jqZVV2A:xVnqjCXY9VO7ShMLHZzlXIsCa3Q=",
        nameText: "案例菜品5",
        infoText: "仅案例展示菜品，暂不支持配送。",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      },
      6: {
        id: "6",
        iconPath:
          "https://qiniuyun8.zhidianfan.com/810db9313124499c86a01bc303be2d13.png?e=3161471857&token=7Qtn8gb2H4Jrup0BKvT781jKUxQDUrib7jqZVV2A:AGOZVp5u0l1Zi3ZKu9fA2Ai4TGE=",
        nameText: "案例菜品6",
        infoText: "仅案例展示菜品，暂不支持配送。",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      },
      7: {
        id: "7",
        iconPath:
          "https://qiniuyun8.zhidianfan.com/2f7f9407184248f6961899c386f30c5f.png?e=3161471776&token=7Qtn8gb2H4Jrup0BKvT781jKUxQDUrib7jqZVV2A:xVnqjCXY9VO7ShMLHZzlXIsCa3Q=",
        nameText: "案例菜品7",
        infoText: "仅案例展示菜品，暂不支持配送。",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      },
      8: {
        id: "8",
        iconPath:
          "https://qiniuyun8.zhidianfan.com/810db9313124499c86a01bc303be2d13.png?e=3161471857&token=7Qtn8gb2H4Jrup0BKvT781jKUxQDUrib7jqZVV2A:AGOZVp5u0l1Zi3ZKu9fA2Ai4TGE=",
        nameText: "案例菜品8",
        infoText: "仅案例展示菜品，暂不支持配送。",
        costText: "¥ 4.5",
        price: 4.5,
        storage: 1
      }
    },
    categories: {
      0: {
        id: "0",
        // iconPath: "/static/icon/fire.png",
        text: "店长推荐",
        foodList: ["1", "2", "3", "4"]
      },
      1: {
        id: "1",
        // iconPath: "/static/icon/bonus.png",
        text: "主食类",
        foodList: ["5", "6", "7", "8"]
      },
      2: {
        id: "2",
        text: "小食类",
        foodList: []
      },
      3: {
        id: "3",
        text: "酒水饮料",
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
      },
      {
        id: 2,
        status: config.ORDER_STATUS.ACCEPTED, //1 待支付 2 待接单 3 已接单 4 已配送 5 已取餐 6 已取消
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
      },
      {
        id: 3,
        status: config.ORDER_STATUS.EXPRESSED, //1 待支付 2 待接单 3 已接单 4 已配送 5 已取餐 6 已取消
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
    actSetExpressOrderStatus({ commit, getters }, obj) {
      let expressOrderList = getters.expressOrderList;
      let { id, status } = obj;
      let index = expressOrderList.findIndex(order => order.id == id);
      let order = expressOrderList[index];
      order.status = status;
      commit("setExpressOrder", {
        id,
        order
      });
    },
    async actGetUserInfo() {
      // res = await native.getUserInfo();
      // let res = await auth.tryAuthorize(
      //   "scope.userInfo",
      //   "检测到未能获取到您的用户信息，是否前往设置"
      // );
      // if (!res) return;

      console.log(res);
    },
    async actGetShop({ commit, getters }) {
      utils.log("actions actGetShop in storeGlobal");
      let currentShopId = getters.getCurrentShopId;
      let currentLocation = getters.getCurrentLocation;
      if (!currentLocation) {
        //当前用户定位没有获取到 则获取到总店信息 并且锁住操作
        let shopMain = {
          id: 2,
          logo: "/static/icon/logo.png",
          title: "小程序演示酒店",
          dist: 3.3,
          //distDesc: "距您2.2km",
          expressMinCost: 50,
          expressCost: 4,
          address: "金水区黄河路与南阳路交汇处西北角",
          busitime: "外送时间 11:00-14:00，17:00-21:00",
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
          logo: "/static/icon/logo.png",
          title: "小程序演示酒店",
          dist: 2.2,
          //distDesc: "距您2.2km",
          expressMinCost: 50,
          expressCost: 4,
          address: "金水区黄河路与南阳路交汇处西北角",
          busitime: "外送时间 11:00-14:00，17:00-21:00",
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
          logo: "/static/icon/logo.png",
          title: "小程序演示酒店",
          dist: 3.3,
          //distDesc: "距您2.2km",
          expressMinCost: 50,
          expressCost: 4,
          address: "金水区黄河路与南阳路交汇处西北角",
          busitime: "外送时间 11:00-14:00，17:00-21:00",
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
          //第一次拉起授权并且成功 则跳转到店铺选择页面进行选择
          native.nav2("/pages/shopList/main");
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

      let mockData = [
        {
          id: 1,
          address: "万达广场(四明中路店)",
          door: "B栋19202223333",
          receiver: {
            name: "陈颖颖",
            gender: "2",
            contact: "13282250353"
          }
        },
        {
          id: 2,
          address: "海曙金茂悦",
          door: "B栋1920",
          receiver: {
            name: "王哈哈",
            gender: "1",
            contact: "13255555555"
          }
        },
        {
          id: 3,
          address: "秀东尚座",
          door: "B栋1920",
          receiver: {
            name: "陈颖颖",
            gender: "2",
            contact: "13282250353"
          }
        },
        {
          address: "宁波市鄞州区人民政府(惠风东路北)",
          door: "aaa",
          receiver: {
            gender: 1,
            contact: "bbb"
          },
          id: 4
        },
        {
          address: "宁波市鄞州区人民政府",
          door: "dwqdwq",
          receiver: {
            name: "dwqdwq",
            gender: 1,
            contact: "dwqd"
          },
          id: 5
        }
      ];

      let res = fromDto(mockData);
      //获取服务器数据转换后刷新本地数据
      utils.log("actions actGetAddresses in storeGlobal res", res);
      // native.showLoading();
      // let res = await native.request(`${getters.baseUrl}/addresses`);
      // native.hideLoading();
      // utils.log("res: ", res);
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
    setExpressOrder(state, obj) {
      utils.log("mutations setExpressOrderStatus in storeGlobal, obj: ", obj);
      let { id, order } = obj;
      let expressOrderList = state.expressOrderList;
      let index = expressOrderList.findIndex(order => order.id == id);
      expressOrderList[index] = order;
    },
    setPhoneNumber(state, phoneNumber) {
      utils.log(
        "mutations setPhoneNumber in storeGlobal, phoneNumber: ",
        phoneNumber
      );
      state.userProfile.phoneNumber = phoneNumber;
    },
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
    getPhoneNumber(state) {
      let res = state.userProfile.phoneNumber;
      utils.log("getters getPhoneNumber in storeGlobal, res " + res);
      return res;
    },
    getActivities(state) {
      let res = state.activities;
      utils.log("getters getActivities in storeGlobal, activities " + res);
      return res;
    },
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
        let temp = allItems[cartItem.id].price * cartItem.count;
        origin += temp;
      });
      origin = mathUtils.keepDecimalPlaces(origin, 1);
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
        item.costDesc = `¥ ${mathUtils.keepDecimalPlaces(
          item.count * item.detail.price,
          1
        )}`;
        console.log("item.costDesc", item.costDesc);
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
    getCategories(state, getters) {
      let cartItemList = getters.getCartItemList;
      let catItemIdList = cartItemList.map(cartItem => cartItem.id);
      let setCatDetailInfo = cat => {
        let foodList = cat.foodList;
        let newAdded = foodList.filter(
          foodId => catItemIdList.indexOf(foodId) != -1
        ).length;
        cat.newAdded = newAdded;
      };
      utils.log(
        "getters getCategories in storeGlobal, value: ",
        state.categories,
        state.cartItemList
      );
      Object.values(state.categories).forEach(cat => setCatDetailInfo(cat));
      //计算出每一个标签有多少物品在购物车内
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
