// function
function greet(name, m) {
    console.log('Hi' + ' ' + name+ " -- ");
    m();
}

// callback function
function callMe(val) {
    console.log(`I am callback function ${val}`);
}

// passing function as an argument
greet('Peter', callMe);























// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');



















// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // return the time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)
// }

// let display = setInterval(showTime, 5000);


























// let count = 0;

// // function creation
// let interval = setInterval(function(){

//     // increasing the count by 1
//     count += 1;

//     // when count equals to 5, stop the function
//     if(count === 5){
//         clearInterval(interval);
//     }

//     // display the current time
//     let dateTime= new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);

// }, 2000);