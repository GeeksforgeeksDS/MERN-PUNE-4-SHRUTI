/** Import Export patterns */

// 1
const add = (a, b) => {
    return a + b;
  };

module.exports = add;


// 2
module.exports = (a, b) => {
    return a + b;
  };


// 3
  const adds = (a, b) => {
    return a + b;
  };
  const subtract = (a, b) => {
    return a - b;
  };
  
  module.exports = {
    adds,
    subtract,
  };
  
//   5
  // module.exports.add = (a, b) => {
  //   return a + b;
  // };

//   module.exports.subtract = (a, b) => {
//     return a - b;
//   };
  

//   6
  // exports.add = (a, b) => {
  //   return a + b;
  // };

//   exports.subtract = (a, b) => {
//     return a - b;
//   };