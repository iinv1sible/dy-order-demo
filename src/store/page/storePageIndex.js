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
    navigationBarTitle: "苏园",
    roundedButtonBarData: {
      list: [
        {
          id: 1,
          iconPath: `${paths.iconPath}/reserve.png`,
          label: "包厢预定",
          iconSize: "48rpx",
          fontSize: "28rpx"
        },
        {
          id: 2,
          iconPath: `${paths.iconPath}/express.png`,
          label: "订餐外送",
          iconSize: "48rpx",
          fontSize: "28rpx"
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
