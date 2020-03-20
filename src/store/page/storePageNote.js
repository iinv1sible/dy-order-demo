import utils from "@/utils/utils";
let storePageNote = {
  namespaced: true,
  state: {
    callback: null,
    text: "",
    tagList: [
      {
        id: 1,
        text: "不要辣"
      },
      {
        id: 2,
        text: "少点辣"
      },
      {
        id: 3,
        text: "多点辣"
      },
      {
        id: 4,
        text: "不要香菜"
      },
      {
        id: 5,
        text: "不要洋葱"
      },
      {
        id: 6,
        text: "多点醋"
      },
      {
        id: 7,
        text: "多点葱"
      }
    ]
  },
  getters: {
    getTagList(state) {
      utils.log(
        "getters getTagList in storePageNote state.tagList",
        state.tagList
      );
      return state.tagList;
    },
    getText(state) {
      utils.log("getters getText in storePageNote state.text", state.text);
      return state.text;
    },
    getCallback(state) {
      utils.log("getters getCallback in storePageNote ");
      return state.callback;
    }
  },
  mutations: {
    setCallback(state, callback) {
      utils.log("mutations setCallback in storePageNote callback", callback);
      state.callback = callback;
    },
    setText(state, text) {
      utils.log("mutations setText in storePageNote text", text);
      state.text = text;
    }
  },
  actions: {
    actTrigger({ getters }, obj) {
      utils.log("actions actTrigger in storePageNote obj", obj);
      let callback = getters.getCallback;
      console.log("callback", callback);
      callback && callback(obj);
    }
  }
};
export default storePageNote;
