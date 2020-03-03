import utils from "@/utils/utils";
export default class WXNative {
  request(obj) {
    if (typeof obj === "string") {
      obj = {
        url: obj
      };
    }
    let p = new Promise((resovle, reject) => {
      mpvue.request({
        url: obj.url,
        data: obj.data,
        header: obj.header,
        method: obj.method,
        dataType: obj.dataType,
        responseType: obj.responseType,
        success(res) {
          resovle(res);
        },
        fail() {
          reject(res);
        }
      });
    });
    return p;
  }
  async fetchSystemInfo(callback) {
    wx.getSystemInfo({
      success: sysInfo => {
        utils.log("WXNative fetchSystemInfo, sysInfo: ", sysInfo);
        callback(sysInfo);
      }
    });
  }
  async fetchCapsuleButtonInfo() {
    let capsuleButtonInfo = await mpvue.getMenuButtonBoundingClientRect();
    utils.log("WXNative fetchCapsuleButtonInfo, value: ", capsuleButtonInfo);
    return capsuleButtonInfo;
  }
  setNavigationBarTitle(title) {
    mpvue.setNavigationBarTitle({
      title
    });
  }
  nav2(url) {
    wx.navigateTo({
      url
    });
  }
  navigateBack() {
    wx.navigateBack();
  }
  showToast(obj) {
    wx.showToast({
      title: obj.msg,
      icon: "none"
    });
  }
}
