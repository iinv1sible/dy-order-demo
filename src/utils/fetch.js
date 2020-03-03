import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
function fetch(obj) {
  return native.request(obj);
}

export default fetch;
