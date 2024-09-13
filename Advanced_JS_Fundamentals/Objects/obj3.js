// Prototype setter

/** 
 * A property definition of the form __proto__: value or "__proto__": value does not create a property with the name __proto__
Note that the __proto__ key is standardized syntax, in contrast to the non-standard and non-performant Object.prototype.__proto__ accessors. 
It sets the [[Prototype]] during object creation, similar to Object.create
 **/


const obj11 = {};
console.log(Object.getPrototypeOf(obj11) === Object.prototype);



const obj2 = { __proto__: null };
console.log(Object.getPrototypeOf(obj2));



const protoObj = {};
const obj3 = { "__proto__": protoObj };
console.log(Object.getPrototypeOf(obj3) === protoObj);











const obj4 = { __proto__: "not an object or null" };
console.log(Object.getPrototypeOf(obj4) === Object.prototype);
console.log(Object.hasOwn(obj4, "__proto__"));




const obj1 = { __proto__ };
console.log(Object.hasOwn(obj1, "__proto__"));