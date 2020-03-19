import utils from "@/utils/utils";
let storePageBanquet = {
  namespaced: true,
  state: {
    phoneNumber: "",
    weNumber: "",
    gender: 0,
    selectedBanquetType: 0,
    banquetTypes: [
      {
        id: 0,
        text: "婚宴"
      },
      {
        id: 1,
        text: "满月宴"
      },
      {
        id: 2,
        text: "百日宴"
      },
      {
        id: 3,
        text: "谢师宴"
      },
      {
        id: 4,
        text: "年会"
      }
    ]
  },
  mutations: {
    setGender(state, gender) {
      utils.log("mutations setGender in storePageBanquet gender", gender);
      state.gender = gender;
    },
    setPhoneNumber(state, phoneNumber) {
      utils.log(
        "mutations setPhoneNumber in storePageBanquet phoneNumber",
        phoneNumber
      );
      state.phoneNumber = phoneNumber;
    },
    setWeNumber(state, weNumber) {
      utils.log("mutations setWeNumber in storePageBanquet weNumber", weNumber);
      state.weNumber = weNumber;
    },
    setSelectedBanquetType(state, id) {
      utils.log(
        "mutations setSelectedBanquetType in storePageBanquet type",
        id
      );
      state.selectedBanquetType = id;
    }
  },
  getters: {
    getSelectedBanquetType(state) {
      utils.log(
        "getters getSelectedBanquetType in storePageBanquet selectedBanquetType",
        state.selectedBanquetType
      );
      return state.selectedBanquetType;
    },
    getBanquetTypes(state) {
      utils.log(
        "getters getBanquetTypes in storePageBanquet banquetTypes",
        state.banquetTypes
      );
      return state.banquetTypes;
    },
    getGender(state) {
      utils.log("getters getGender in storePageBanquet gender", state.gender);
      return state.gender;
    },
    getPhoneNumber(state) {
      utils.log(
        "mutations getPhoneNumber in storePageBanquet res",
        state.phoneNumber
      );
      return state.phoneNumber;
    },
    getWeNumber(state) {
      utils.log(
        "mutations getWeNumber in storePageBanquet res",
        state.weNumber
      );
      return state.weNumber;
    }
  }
};
export default storePageBanquet;
