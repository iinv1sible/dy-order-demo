import nativeMgr from "@/native/NativeMgr";
import utils from "@/utils/utils";
let native = nativeMgr.getNative();

function tryAuthorize(scope, msg) {
  return new Promise(async (resolve, reject) => {
    utils.log("tryAuthorize ", scope);
    let authorized = await native.checkAuthorized(scope);
    console.log("tryAuthorize 1");
    if (authorized) {
      console.log("tryAuthorize 2");
      resolve(true);
    } else {
      try {
        console.log("tryAuthorize 3");
        let res = await native.authorize(scope);
        console.log("tryAuthorize 4");
        //表示成功
        resolve(true);
      } catch (e) {
        //表示此次拒绝或者已经拒绝
        console.log("tryAuthorize 5");
        let res = await native.showModal({
          content: msg,
          confirmText: "确定",
          cancelText: "取消"
        });
        if (res.confirm) {
          native.openSetting();
          console.log("tryAuthorize 6");
        }
        console.log("tryAuthorize 7");
        resolve(false);
      }
    }
  });
}

export default {
  tryAuthorize
};
