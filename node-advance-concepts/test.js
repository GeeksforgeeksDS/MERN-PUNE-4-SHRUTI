const add = function (a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
  };

  add(1, 2, (sum1) => {
    add(3, sum1, (sum2) => {
      add(4, sum2, (sum3) => {
        console.log(`Sum of first 4 natural numbers using callback is ${sum3}`);
      });
    });
  });
console.log(add)