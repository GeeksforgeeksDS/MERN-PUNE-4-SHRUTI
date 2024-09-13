let seaCreatures = [
	"octopus",
	"squid",
	"shark",
	"seahorse",
	"starfish",
];
console.log(seaCreatures)











let nestedArray = [
	[
		"salmon",
		"halibut",
	],
	[
		"coral",
		"reef",
	]
];

console.log(nestedArray[1][0]);





//add
seaCreatures[7] = "pufferfish";
seaCreatures.push("lobster");
seaCreatures.unshift("dragonfish");










//remove
seaCreatures.slice(1, 3);
seaCreatures.pop();
seaCreatures.shift();















//modify
let seaCreature  = [ 'manatee',
	'squid',
	'shark',
	'seahorse',
	'starfish',
	'whale',
	'pufferfish' ]
console.log(seaCreature.splice(3, 1, "sea lion"))
//splice(index number, number of items to remove, items to add)















//Looping
let shellfish = [
	"oyster",
	"shrimp",
	"clam",
	"mussel",
];
for (let i = 0; i < shellfish.length; i++) {
    console.log(i, shellfish[i]);
  }

for (let shf of shellfish) {
	console.log(shf);
}