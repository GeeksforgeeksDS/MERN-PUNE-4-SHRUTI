/** multiple tasks can execute at the same time while tasks in the background finish. 
This is what we call non-blocking code*/ 

let greet_one = "Hello"
let greet_two = "World!!!"
console.log(greet_one)
setTimeout(function(){
    console.log("Asynchronous");
}, 10000)
console.log(greet_two);














function compute(action, x, y){
    if(action === "add"){
        return x+y
    }else if(action === "divide"){
        return x/y
    }
}

console.log(compute("add",10,5))   
console.log(compute("divide",10,5)) 


















function add(x,y){
    return x+y
}

function divide(x,y){
    return x/y
}

function compute(callBack, x, y){
    return callBack(x,y)
}

console.log(compute(add, 10, 5))   
console.log(compute(divide, 10, 5))