const mobile = {
  name: "samsung",
  ram: "8gb",
  camera: "20px",
  rom: "64gb",
  price: 29000,
};

/* let objKey = Object.keys(mobile);
// console.log(objKey);
for (let i = 0; i < objKey.length; i++) {
  // console.log(objKey[i]);
  let singleKeyValue = objKey[i];
  let propValue = mobile[singleKeyValue];
  console.log(singleKeyValue, ":", propValue);
} */

for (let propName in mobile) {
  //   console.log(propName);
  let keyValue = mobile[propName];
  console.log(propName, ":", keyValue);
}
