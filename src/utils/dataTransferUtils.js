//数据传输对象转换成本地对象
//本地对象转换成数据传输对象
//完善对象信息 添加根据元数据衍生出来的描述数据
let dtu = {
  setShopDetailInfo: shop => {
    shop.distDesc = `距您${shop.dist}km`;
    shop.expressDesc = `起送价￥ ${shop.expressMinCost} · 配送费  ¥ ${shop.expressCost}起 `;
    shop.ticketSupportDesc = `${shop.ticketSuppert ? "支持" : "不支持"}`;
    return shop;
  }
};

export default dtu;
