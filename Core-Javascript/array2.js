// Methods that modify the original array are known as mutator methods, 
// methods that return a new value or representation are known as accessor methods.

// Note: Array methods are properly written out as Array.prototype.method(), 
// as Array.prototype refers to the Array object itself. 
// For simplicity, we will simply list the name as method().


//Mutator methods

let fish = [ "piranha", "barracuda", "koi", "eel" ];
console.log(Array.isArray(fish))
console.log(fish.pop())
console.log(fish.shift())
console.log(fish.push("swordfish"))
console.log(fish.unshift("shark"))
console.log(fish.splice(1, 0, "manta ray"))
console.log(fish.splice(1, 2, "manta ray"))
console.log(fish.reverse())
console.log(fish.fill("shark")+'------'+fish.fill("shark", 1))
console.log(fish.sort())