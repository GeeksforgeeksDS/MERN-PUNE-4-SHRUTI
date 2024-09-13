// JavaScript Promise Methods

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });



// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, 'foo'),
// );
// const promise3 = Promise.resolve(1);
// const promises = [promise1, promise2, promise3];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status)),
// )



// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));



// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   });


// function resolved(result) {
//     console.log('Resolved');
//   }
  
//   function rejected(result) {
//     console.error(result);
//   }

  
//   Promise.reject(new Error('fail')).then(resolved, rejected);


// const promise1 = Promise.resolve(123);

// promise1.then((value) => {
//   console.log(value);
// });