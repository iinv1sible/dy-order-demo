import utils from "@/utils/utils";
import paths from "@/static/paths";
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
let storePageAddressEdit = {
  namespaced: true,
  state: {
    formData: {
      id: "",
      addressName: "", //地址名称
      addressLocation: "", //地址详细位置
      locationInfo: null, //地址详细信息 保存下来
      door: "", //门牌号需要手填
      name: "", //接收人的姓名
      gender: "", //接收人性别
      contact: "" //接收人联系方式,
    },
    genders: [
      {
        value: 1,
        text: "男",
        checked: true
      },
      {
        value: 2,
        text: "女"
      }
    ],
    type: 1 //1表示新增 2表是编辑,
  },
  actions: {
    actSaveAddress({ getters, dispatch }) {
      let toDto = obj => {
        return {
          id: obj.id,
          address: obj.addressName,
          door: obj.door,
          receiver: {
            name: obj.name,
            gender: obj.gender,
            contact: obj.contact
          }
        };
      };
      //发起请求 回调之后再次刷新即可
      let formData = getters.getFormData;
      let dto = toDto(formData);
      let type = getters.getType;
      let path =
        type === 1 ? "storeGlobal/actAddAddress" : "storeGlobal/actEditAddress";
      dispatch(
        path,
        {
          data: dto,
          success: () => {
            native.navigateBack();
          }
        },
        { root: true }
      );
    },
    actDelAddress() {}
  },
  getters: {
    getGenders(state) {
      return state.genders;
    },
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
    setFormDataFromNameValue(state, obj) {
      state.formData[obj.name] = obj.value;
      utils.log(
        "mutations setFormDataFromNameValue in storePageAddressEdit, formData: ",
        state.formData,
        "obj",
        obj
      );
    },
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
    setAddressByLocationInfo(state, locationInfo) {
      state.formData.addressName = locationInfo.name;
      state.formData.addressLocation = locationInfo.address;
      state.formData.locationInfo = locationInfo;
      utils.log(
        "mutations setAddressByLocationInfo in storePageAddressEdit, locationInfo: ",
        locationInfo,
        "formdata",
        state.formData
      );
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
        id: ori.id,
        addressName: ori.address,
        door: ori.door,
        name: ori.receiver.name,
        gender: ori.receiver.gender,
        contact: ori.receiver.contact
      };
      state.genders.forEach(
        gender => (gender.checked = gender.value == res.gender)
      );
      state.formData = res;
    },
    resetGenders(state) {
      state.genders.forEach(gender => (gender.checked = gender.value == 1));
      state.formData.gender = 1;
    }
  }
};
export default storePageAddressEdit;
