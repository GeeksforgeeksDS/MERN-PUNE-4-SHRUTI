function to find square of a number
function findSquare(num) {

    // return square
    return num * num; 
}

// call the function and store the result
let square = findSquare(3);

console.log(`Square: ${square}`);




function display() {

    console.log("This will be executed.");

    return "Returning from function.";

    console.log("This will not be executed.");
}

let message = display();
console.log(message); 