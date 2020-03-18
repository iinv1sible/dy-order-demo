import utils from "@/utils/utils";
export default class WXNative {
  moveToLocation(mapContext, obj) {
    return new Promise((resolve, reject) => {
      utils.log(
        "将地图中心移到指定位置开始 mapContext",
        mapContext,
        "obj",
        obj
      );
      mapContext.moveToLocation({
        longitude: obj.longitude,
        latitude: obj.latitude,
        success: res => {
          utils.log("将地图中心移到指定位置成功 res", res);
          resolve(res);
        },
        fail: res => {
          utils.log("将地图中心移到指定位置异常 res", res);
          reject(res);
        }
      });
    });
  }
  translateMarker(mapContext, obj) {
    return new Promise((resolve, reject) => {
      utils.log("开始移动地图标记 mapContext", mapContext, "obj", obj);
      mapContext.translateMarker({
        markerId: obj.markerId,
        destination: {
          longitude: obj.longitude,
          latitude: obj.latitude
        },
        autoRotate: false,
        rotate: 0,
        duration: 0,
        success: res => {
          utils.log("移动地图标记成功 res", res);
          resolve(res);
        },
        fail: res => {
          utils.log("移动地图标记异常 res", res);
          reject(res);
        }
      });
    });
  }
  createMapContext(mapId) {
    return wx.createMapContext(mapId);
  }
  checkAuthorized(scope) {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success(res) {
          utils.log("检查授权信息成功回调 res", res);
          resolve(res.authSetting[scope]);
        },
        fail(res) {
          utils.log("检查授权信息异常回调 res", res);
          reject(res);
        }
      });
    });
  }
  authorize(scope) {
    return new Promise((resolve, reject) => {
      wx.authorize({
        scope: scope,
        success(res) {
          utils.log("授权成功回调 res", res);
          resolve(res);
        },
        fail: res => {
          utils.log("授权异常回调 res", res);
          reject(res);
        }
      });
    });
  }
  openSetting() {
    return new Promise((resolve, reject) => {
      wx.openSetting({
        success(res) {
          utils.log("设置界面成功回调", res);
          resolve(res);
        },
        fail(res) {
          utils.log("设置界面异常", res);
          reject(res);
        }
      });
    });
  }
  //调用微信原生api一定要监听fail事件 因为如果参数不正确 小程序不会有任何的debug输出 所以你也将不知道是出现了什么问题 效果就是没出来
  showModal(obj) {
    return new Promise((resolve, reject) => {
      utils.log("显示模态框 obj", obj);
      wx.showModal({
        title: obj.title || "",
        content: obj.content || "",
        cancelText: obj.cancelText || "",
        confirmText: obj.confirmText || "",
        showCancel: obj.showCancel,
        success(res) {
          utils.log("用户点击模态框 res", res);
          resolve(res);
        },
        fail(res) {
          utils.log("模态框异常 res", res);
          reject(res);
        }
      });
    });
  }
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
    wx.setNavigationBarTitle({
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
  openLocation(obj) {
    wx.openLocation(obj);
  }
  getLocation() {
    return new Promise((resolve, reject) => {
      utils.log("开始获取用户定位");
      wx.getLocation({
        success(res) {
          utils.log("成功获得用户定位 res", res);
          resolve(res);
        },
        fail(res) {
          utils.log("用户定位获取失败 res", res);
          reject(res);
        }
      });
    });
  }
}
