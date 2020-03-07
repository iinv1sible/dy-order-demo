import storePageIndex from "./storePageIndex";
import storePageOrders from "./storePageOrders";
import storePageExpress from "./storePageExpress";
import storePageOrderDetail from "./storePageOrderDetail";
import storePageOrderConfirm from "./storePageOrderConfirm";
import storePageAddressEdit from "./storePageAddressEdit";
import storePageShopList from "./storePageShopList";
let storePages = {
  namespaced: true,
  modules: {
    storePageIndex,
    storePageOrders,
    storePageExpress,
    storePageOrderDetail,
    storePageOrderConfirm,
    storePageAddressEdit,
    storePageShopList
  }
};
export default storePages;
