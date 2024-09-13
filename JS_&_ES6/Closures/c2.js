// nested function example

// outer function
function greet(name) {

    // inner function
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // calling inner function
    displayName();
}

// calling outer function
greet('John'); 