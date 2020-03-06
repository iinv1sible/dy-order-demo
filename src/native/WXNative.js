import utils from "@/utils/utils";
export default class WXNative {
  request(obj) {
    if (typeof obj === "string") {
      obj = {
        url: obj
      };
    }
    let p = new Promise((resovle, reject) => {
      utils.log("http wx request params: ", obj);
      wx.request({
        url: obj.url,
        data: obj.data,
        header: obj.header,
        method: obj.method,
        dataType: obj.dataType,
        responseType: obj.responseType,
        success(res) {
          utils.log("http wx response success res: ", res);
          resovle(res);
        },
        fail(res) {
          utils.log("http wx response fail res: ", res);
          reject(res);
        }
      });
    });
    return p;
  }
  showLoading() {
    wx.showLoading({
      title: "加载中"
    });
  }
  hideLoading() {
    wx.hideLoading();
  }
  fetchSystemInfo(callback) {
    return new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success: sysInfo => resolve(sysInfo)
      });
    });
  }
  fetchCapsuleButtonInfo() {
    return wx.getMenuButtonBoundingClientRect();
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
  chooseLocation(callback) {
    wx.chooseLocation({
      success(res) {
        callback(res);
      }
    });
  }
}
