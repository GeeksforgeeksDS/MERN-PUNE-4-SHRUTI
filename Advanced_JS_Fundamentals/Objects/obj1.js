// Computed property names
let i = 0;
const a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
};

console.log(a.foo1); 
console.log(a.foo2); 
console.log(a.foo3);





const items = ["A", "B", "C"];
const obj = {
  items: "Hello",
  name:"Atharva"
};
console.log(obj); 
console.log(obj["A,B,C"]); 
console.log(obj["name"])




const param = "size";
const config = {
  [param]: 12,
  [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
};

console.log(config)