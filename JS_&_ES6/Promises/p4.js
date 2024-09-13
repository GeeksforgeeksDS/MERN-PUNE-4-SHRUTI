// JavaScript finally() method - finally() method gets executed when the promise is either resolved successfully or rejected.

// returns a promise
let countValue = new Promise(function (resolve, reject) {
    // could be resolved or rejected   
    resolve('Promise resolved'); 
});

// add other blocks of code
countValue.finally(
    function greet() {
        console.log('This code is executed.');
    }
);