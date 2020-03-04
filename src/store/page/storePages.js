import storePageIndex from "./storePageIndex";
import storePageOrders from "./storePageOrders";
import storePageExpress from "./storePageExpress";
import storePageOrderDetail from "./storePageOrderDetail";
import storePageOrderConfirm from "./storePageOrderConfirm";
let storePages = {
  namespaced: true,
  modules: {
    storePageIndex,
    storePageOrders,
    storePageExpress,
    storePageOrderDetail,
    storePageOrderConfirm
  }
};
export default storePages;
