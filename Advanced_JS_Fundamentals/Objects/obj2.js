// Spread properties : It copies own enumerable properties from a provided object onto a new object.

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj)



const obj11 = { foo: "bar", x: 42 };
const obj22 = { foo: "baz", y: 13 };

let oObj = { ...obj11, ...obj22 };
let oObj1 = {obj11, ...obj22 };
let oObj2 = { obj11,obj22 };
console.log(oObj)
console.log(oObj1)
console.log(oObj2)