import utils from "@/utils/utils";
import paths from "@/static/paths";
let storePageAddressEdit = {
  namespaced: true,
  state: {
    formData: {
      address: "",
      door: "",
      name: "",
      gender: "",
      contact: ""
    },
    type: 1 //1表示新增 2表是编辑,
  },
  getters: {
    getType(state) {
      let res = state.type;
      utils.log("getters getType in storePageAddressEdit, res: ", res);
      return res;
    },
    getFormData(state) {
      let res = state.formData;
      utils.log("getters getFormData in storePageAddressEdit, res: ", res);
      return res;
    }
  },
  mutations: {
    setType(state, type) {
      utils.log("mutations setType in storePageAddressEdit, type: ", type);
      state.type = type;
    },
    setFormData(state, formData) {
      utils.log(
        "mutations setFormData in storePageAddressEdit, formData: ",
        formData
      );
      state.formData = formData;
    },
    setFormDateFromAddress(state, ori) {
      // id: 1,
      // address: "秀东尚座",
      // door: "B栋1920",
      // receiver: {
      //   name: "陈颖颖",
      //   gender: config.GENDER_TYPE.FEMALE,
      //   contact: "13282250353"
      // }
      utils.log(
        "mutations setFormDateFromAddress in storePageAddressEdit, ori: ",
        ori
      );
      let res = {
        address: ori.address,
        door: ori.door,
        name: ori.receiver.name,
        gender: ori.receiver.gender,
        contact: ori.receiver.contact
      };
      state.formData = res;
    }
  }
};
export default storePageAddressEdit;
