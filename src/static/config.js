let config = {
  baseUrl: "http://localhost:3000",
  sysStyles: {
    blue: "Blue",
    yellow: "Yellow"
  },
  ORDER_STATUS_DESC_MAP: {
    1: "预订单已提交，待付款",
    2: "待商家接单",
    3: "商家已接单",
    4: "已配送",
    5: "已取餐",
    6: "订单已取消"
  },
  ORDER_STATUS: {
    WAIT_PAY: 1,
    WAIT_ACCEPT: 2,
    ACCEPTED: 3,
    EXPRESSED: 4,
    FETCHED: 5,
    CANCELED: 6
  }
};

export default config;
