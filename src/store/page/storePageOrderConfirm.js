import utils from "@/utils/utils";
import paths from "@/static/paths";
let storePageOrderConfirm = {
  namespaced: true,
  state: {
    method: 1, // 1 配送 2 自提
    note: "",
    treePickerData: {
      title: "选择送达时间",
      selectedNodeIndex: 0,
      selectedSubNodeIndex: 0,
      nodes: [
        {
          text: "今日（周一）",
          value: "今日（周一）",
          nodes: [
            {
              text: "尽快送达|12:05",
              value: "尽快送达|12:05"
            },
            {
              text: "12:15",
              value: "12:15"
            },
            {
              text: "12:30",
              value: "12:30"
            },
            {
              text: "12:45",
              value: "12:45"
            },
            {
              text: "13:00",
              value: "13:00"
            },
            {
              text: "12:15",
              value: "12:15"
            },
            {
              text: "12:30",
              value: "12:30"
            },
            {
              text: "12:45",
              value: "12:45"
            },
            {
              text: "13:00",
              value: "13:00"
            }
          ]
        }
      ]
    }
  },
  getters: {
    getSelectedTreeNode(state, getters) {
      let data = getters.getTreePickerData;
      let node = data.nodes[data.selectedNodeIndex];
      let subNode = node.nodes[data.selectedSubNodeIndex];
      utils.log(
        "getters getSelectedTreeNode in storePageOrderConfirm, subNode: ",
        subNode
      );
      return subNode;
    },
    getTreePickerData(state) {
      utils.log(
        "getters getTreePickerData in storePageOrderConfirm, state.treePickerData: ",
        state.treePickerData
      );
      return state.treePickerData;
    },
    getNote(state) {
      utils.log(
        "getters getNote in storePageOrderConfirm, state.note: ",
        state.note
      );
      return state.note;
    },
    getMethod(state) {
      utils.log(
        "getters getMethod in storePageOrderConfirm, val: ",
        state.method
      );
      return state.method;
    }
  },
  mutations: {
    setTreePickerData(state, data) {
      utils.log(
        "mutations setTreePickerData in storePageOrderConfirm, data: ",
        data
      );
      state.treePickerData = data;
    },
    setNote(state, note) {
      utils.log("mutations setNote in storePageOrderConfirm, note: ", note);
      state.note = note;
    },
    setMethod(state, method) {
      utils.log(
        "mutations setMethod in storePageOrderConfirm, method: ",
        state.method
      );
      state.method = method;
    }
  }
};

export default storePageOrderConfirm;
