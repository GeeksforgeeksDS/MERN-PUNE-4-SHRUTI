// What is a Function?

// A function is a subprogram 
// Functions are executed when they are called. This is known as invoking a function.
// Values can be passed into functions and used within the function.
// Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.
// Functions are objects.

//Function Declaration 
function name(parameters){
    statements
  }

//Function Expressions
let name = function(parameters){
    statements
  }

//Arrow Function Expression
let name = (parameters) => {
    statements
  }
  
//Parameters vs. Arguments.
const param1 = true;
const param2 = false;
function twoParams(param1, param2){
  console.log(param1, param2);
}