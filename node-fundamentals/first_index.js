require('./second_add');

// const addFn = require('./add');

console.log('hello')

// const sum  = addFn(2,5)
// const sum2  = addFn(1,5)
// console.log(sum)
// console.log(sum2)



/**Module Scope */
// require('./third_batman')
// require('./fourth_superman')





/**Module Caching*/
/**
 * const superHero = require('./sixth_super_hero')
console.log(superHero.getName())

superHero.setName("SuperMan")
console.log(superHero.getName())


const newSuperHero = require('./sixth_super_hero')
console.log(newSuperHero.getName())
*/


/**
 * const SuperHero = require("./sixth_super_hero")

const bm = new SuperHero("Batman")
console.log(bm.getName())
bm.setName("Bruce Wayne")
console.log(bm.getName())

const sm = new SuperHero("Superman")
console.log(bm.getName())
*/




/** Import Export patterns */
// const add = require("./seventh_math")
// console.log(add(2,5))


// const math = require("./seventh_math")
// console.log(math.adds(2,5))
// console.log(math.subtract(2,8))


// const math = require("./seventh_math")
// const {adds, subtract} = math
// console.log(adds(2,5))
// console.log(subtract(2,8))