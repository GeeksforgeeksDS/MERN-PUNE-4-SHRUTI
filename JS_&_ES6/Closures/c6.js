function sum() {
    let a = 0;
    function increaseSum() {

        // the value of a is increased by 1, a variable to be increased only inside the function
        return a = a + 1;
    }
    return increaseSum;
}

let x = sum();
let a = 5;
console.log(x()); 
console.log(x()); 
console.log(a); 