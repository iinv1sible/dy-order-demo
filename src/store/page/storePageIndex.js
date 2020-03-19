import utils from "@/utils/utils";
import paths from "@/static/paths";
let storePageIndex = {
  namespaced: true,
  state: {
    loaded: false,
    swiperImgList: [
      "/static/images/img01.png",
      "/static/images/img02.png",
      "/static/images/img03.png"
    ],
    headerLocationText: "浙江省宁波市鄞州区鄞州科技孵化园...",
    navigationBarTitle: "天港禧悦",
    officialFoodImgConfig: {
      list: [
        {
          src: "/static/icon/food3.png",
          text: "门面"
        },
        {
          src: "/static/icon/food1.png",
          text: "麻婆豆腐"
        },
        {
          src: "/static/icon/food2.png",
          text: "甜品"
        }
      ]
    },
    roundedButtonBarData: {
      list: [
        {
          id: 1,
          iconText: "包厢",
          iconTextSize: "24rpx",
          iconTextColor: "#fff",
          iconSize: "74rpx",
          iconColor: "#F84819",
          text: "包厢预订",
          textSize: "24rpx",
          textColor: "#101010"
        },
        {
          id: 3,
          iconText: "宴会",
          iconTextSize: "24rpx",
          iconTextColor: "#fff",
          iconSize: "74rpx",
          iconColor: "#BEBEBE",
          text: "宴会预订",
          textSize: "24rpx",
          textColor: "#101010"
        },
        {
          id: 2,
          iconText: "外送",
          iconTextSize: "24rpx",
          iconTextColor: "#fff",
          iconSize: "74rpx",
          iconColor: "#BEBEBE",
          text: "订餐外送",
          textSize: "24rpx",
          textColor: "#101010",
          url: "/pages/express/main"
        },
        {
          id: 4,
          iconText: "宴席",
          iconTextSize: "24rpx",
          iconTextColor: "#fff",
          iconSize: "74rpx",
          iconColor: "#BEBEBE",
          text: "宴席到家",
          textSize: "24rpx",
          textColor: "#101010"
        }
      ]
    }
  },
  mutations: {
    setLoaded(state, val) {
      utils.log("mutations setLoaded in storePageIndex, val: ", val);
      state.loaded = val;
    }
  },
  getters: {
    getOfficialFoodImgConfig(state) {
      utils.log(
        "getters officialFoodImgConfig in storePageIndex, value: ",
        state.officialFoodImgConfig
      );
      return state.officialFoodImgConfig;
    },
    getLoaded(state) {
      utils.log("getters getLoaded in storePageIndex, value: ", state.loaded);
      return state.loaded;
    },
    getSwiperImgList(state) {
      utils.log(
        "getters getSwiperImgList in storePageIndex, value: ",
        state.swiperImgList
      );
      return state.swiperImgList;
    },
    getHeaderLocationText(state) {
      utils.log(
        "getters getHeaderLocationText in storePageIndex, value: ",
        state.headerLocationText
      );
      return state.headerLocationText;
    },
    getNavigationBarTitle(state) {
      utils.log(
        "getters getNavigationBarTitle in storePageIndex, value: ",
        state.navigationBarTitle
      );
      return state.navigationBarTitle;
    },
    getRoundedButtonBarData(state) {
      utils.log(
        "getters getRoundedButtonBarData in storePageIndex, value: ",
        state.roundedButtonBarData
      );
      return state.roundedButtonBarData;
    }
  }
};
export default storePageIndex;
