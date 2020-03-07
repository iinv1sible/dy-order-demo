import utils from "@/utils/utils";
import dtu from "@/utils/dataTransferUtils";
let storePageShopList = {
  namespaced: true,
  state: {
    shopList: [],
    search: "", //查询关键字
    selectedShopId: 1
  },
  getters: {
    getSelectedShop: (state, getters) => {
      let shopList = getters.getShopList;
      let selectedShopId = getters.getSelectedShopId;
      let index = shopList.findIndex(shop => shop.id == selectedShopId);
      return shopList[index];
    },
    getSelectedShopId(state) {
      utils.log("getters getSelectedShopId in storePageShopList ");
      return state.selectedShopId;
    },
    getShopList(state) {
      utils.log("getters getShopList in storePageShopList ");
      return state.shopList;
    }
  },
  mutations: {
    setSelectedShopId(state, id) {
      utils.log("mutations sertSelectedShopId in storePageShopList id", id);
      state.selectedShopId = id;
    },
    setShopList(state, shopList) {
      utils.log(
        "mutations setShopList in storePageShopList shopList",
        shopList
      );
      state.shopList = shopList;
    }
  },
  actions: {
    actGetShopList({ commit, rootGetters, getters }, obj) {
      utils.log("actions actGetShopList in storePageShopList");
      //获取到用户位置
      let location = rootGetters["storeGlobal/getCurrentLocation"];
      //TODO 和查询关键字一起查询服务器 结果是一个列表 为过滤掉关键字后并且与位置信息由近到远排列
      //模拟结果
      commit("setShopList", [
        dtu.setShopDetailInfo({
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
          isMain: true,
          isInExpressRange: true, //是否超出配送范围
          isInBusi: false, //是否正在营业中
          longitude: 121.586701,
          latitude: 29.871465
        }),
        dtu.setShopDetailInfo({
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
          isInBusi: true, //是否正在营业中
          longitude: 121.54292202742762,
          latitude: 29.88292271895578
        }),
        dtu.setShopDetailInfo({
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
          isInBusi: false, //是否正在营业中
          longitude: 121.60301613087441,
          latitude: 29.906649401607588
        })
      ]);
      //刷新店铺列表后则默认选中第一个
      commit("setSelectedShopId", getters.getShopList[0].id);
      obj.complete && obj.complete();
    }
  }
};
export default storePageShopList;
