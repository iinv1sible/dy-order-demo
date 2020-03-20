import storePageIndex from "./storePageIndex";
import storePageOrders from "./storePageOrders";
import storePageExpress from "./storePageExpress";
import storePageOrderDetail from "./storePageOrderDetail";
import storePageOrderConfirm from "./storePageOrderConfirm";
import storePageAddressEdit from "./storePageAddressEdit";
import storePageShopList from "./storePageShopList";
import storePageWebView from "./storePageWebView";
import storePageBanquet from "./storePageBanquet";
import storePageNote from "./storePageNote";
let storePages = {
  namespaced: true,
  modules: {
    storePageIndex,
    storePageOrders,
    storePageExpress,
    storePageOrderDetail,
    storePageOrderConfirm,
    storePageAddressEdit,
    storePageShopList,
    storePageWebView,
    storePageBanquet,
    storePageNote
  }
};
export default storePages;
