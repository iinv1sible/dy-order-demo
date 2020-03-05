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
  },
  ORDER_EXPRESS_METHOD: {
    EXPRESS: 1,
    SELF: 2
  },
  ORDER_EXPRESS_WHO: {
    SELF: 1
  },
  ORDER_EXPRESS_WHO_DESC_MAP: {
    1: "商家自送"
  },
  ORDER_PAY_METHOD: {
    ONLINE: 1
  },
  GENDER_TYPE: {
    MALE: 1,
    FEMALE: 2
  },
  GENDER_TYPE_DESC_MAP: {
    1: "男士",
    2: "女士"
  }
};

export default config;
