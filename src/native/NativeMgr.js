import WXNative from "./WXNative";
class NativeMgr {
  constructor() {
    this.wxNative = new WXNative();
  }

  /*
   * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
   * 微信：mpvue === wx, mpvuePlatform === 'wx'
   * 头条：mpvue === tt, mpvuePlatform === 'tt'
   * 百度：mpvue === swan, mpvuePlatform === 'swan'
   * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
   */
  getNative() {
    let native = null;
    switch (mpvuePlatform) {
      case "wx":
        native = this.wxNative;
        break;
      case "tt":
        break;
      case "swan":
        break;
      case "my":
        break;
      default:
        //log
        break;
    }
    return native;
  }
}

export default new NativeMgr();
