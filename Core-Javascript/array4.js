// There is a third class of array methods, known as iteration methods, 
// which are methods that operate on every item in an array, one at a time

// arrow functions
var example = (a) => {
    return a+"Example"
  }
  
console.log(example())





let fish = [ "piranha", "barracuda", "cod", "eel" ];
fish.forEach(individualFish => {
	console.log(individualFish);
})

for (let i = 0; i < fish.length; i++) {
	console.log(fish[i]);
}

let printFish = fish.map(individualFish => {
	console.log(individualFish);
});
console.log(printFish)











let seaCreatu = [ "shark", "whale", "squid", "starfish", "narwhal" ];
let filteredList = seaCreatu.filter(creature => {
    return creature[0] === "s";
  });
  
console.log(filteredList);











let numbers = [ 42, 23, 16, 15, 4, 8 ];
let sum = numbers.reduce((a, b) => {
	return a + b;
});
console.log(sum)













let seaCreatures = [ "whale", "octopus", "shark", "cuttlefish", "flounder" ];
const isCephalopod = cephalopod => {
	return [ "cuttlefish", "octopus" ].includes(cephalopod);
}

console.log(seaCreatures.find(isCephalopod))






let seaCreatur = [ "whale", "octopus", "shark", "cuttlefish", "flounder" ];
const Cephalopod = cephalopod => {
	return [ "cuttlefish", "octopus" ].includes(cephalopod);
}
const isThereAnEel = eel => {
    return [ "eel" ].includes(eel);
}


console.log(seaCreatures.findIndex(Cephalopod))
console.log(seaCreatur.findIndex)