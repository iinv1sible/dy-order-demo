function log(...args) {
  console.log(
    "\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  );
  args.forEach(arg => console.log(arg));
  console.log(
    "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n"
  );
}

function styles(obj) {
  let stylesStr = "";
  for (let styleName in obj) {
    if (obj.hasOwnProperty(styleName))
      stylesStr += `${styleName.replace(/([A-Z])/g, "-$1").toLowerCase()}:${
        obj[styleName]
      };`;
  }
  return stylesStr;
}

export default {
  log,
  styles
};
