//  Methods that modify the original array are known as mutator methods, 
// and methods that return a new value or representation are known as accessor methods

//Accessor methods

let monovalves = [ "abalone", "conch" ];
let bivalves = [ "oyster", "mussel", "clam" ];
let shellfish = monovalves.concat(bivalves);
console.log(shellfish)






let fish = [ "piranha", "barracuda", "koi", "eel" ];
let fishString = fish.join();
console.log(fishString)




//splice :
// 1. Zero index count : Array.length <= start -> 0
// 2. Zero based index: Array.length <= end -> 0
// 3. if not : Array.length> end -> end is omitted.
// 4. if end>Array.length / end omitted -> Array.length(start)
// 5. End -> position before/ position start -> []

let fishes = [ "piranha", "barracuda", "koi", "eel" ];
let fishWithShortNames = fishes.slice(2, 4);
console.log(fishWithShortNames)
console.log(fishes.indexOf("barracuda"))
console.log(ish.lastIndexOf("eel"))

