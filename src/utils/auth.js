import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();

function tryAuthorize(scope, msg) {
  return new Promise(async (resolve, reject) => {
    let authorized = await native.checkAuthorized(scope);
    if (authorized) {
      resolve(true);
    } else {
      try {
        let res = await native.authorize(scope);
        //表示成功
        resolve(true);
      } catch (e) {
        //表示此次拒绝或者已经拒绝
        let res = await native.showModal({
          content: msg,
          confirmText: "确定",
          cancelText: "取消"
        });
        if (res.confirm) {
          native.openSetting();
        }
        resolve(false);
      }
    }
  });
}

export default {
  tryAuthorize
};
