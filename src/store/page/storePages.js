import storePageIndex from "./storePageIndex";
import storePageOrders from "./storePageOrders";
import storePageExpress from "./storePageExpress";
let storePages = {
  namespaced: true,
  modules: {
    storePageIndex,
    storePageOrders,
    storePageExpress
  }
};
export default storePages;
