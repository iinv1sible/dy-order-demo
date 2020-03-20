function keepDecimalPlaces(num, count) {
  //不保留小数
  if (count < 1) return num.toString();
  num = num.toString();
  let index = num.toString().indexOf(".");
  if (index == -1) {
    //如果没有小数点 则加上小数点 并且在后面添加上相应位数的0
    num += "." + dupNumStr("0", count);
  } else {
    num = num.slice(0, index + count + 1);
    let nowCount = num.slice(index + 1).length;
    if (nowCount < count) {
      num += dupNumStr("0", count - nowCount);
    }
  }
  return num;
}

function dupNumStr(str, count) {
  let res = "";
  for (let i = 0; i < count; ++i) {
    res += str;
  }
  return res;
}

export default {
  keepDecimalPlaces,
  dupNumStr
};
