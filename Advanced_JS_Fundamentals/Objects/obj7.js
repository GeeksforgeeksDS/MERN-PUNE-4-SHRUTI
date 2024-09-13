// JavaScript Prototype


function Car() {
    console.log("Car instance created!");
};

// add a property to prototype
Car.prototype.color = "Red";

// add a method to the prototype
Car.prototype.drive = function () {
    console.log(`Driving the car painted in ${this.color}...`);
};

// display the added property
console.log(`The car's color is: ${Car.prototype.color}`);

// call the added method
Car.prototype.drive();





/** Prototype Inheritance : Properties or methods added to the prototype of a 
constructor function are accessible to all objects derived from it.**/



function Car(model, year) {
    this.model = model;
    this.year = year;
};

// create multiple objects
let c1 = new Car("Mustang", 1964);
let c2 = new Car("Corolla", 1966);

// add property
Car.prototype.color = "Red";

// add method
Car.prototype.drive = function() {
    console.log(`Driving ${this.model}`);
};

// display added property using c1 and c2 objects
console.log(`${c1.model} color: ${c1.color}`);  
console.log(`${c2.model} color: ${c2.color}`);  

// display added method using c1 and c2 objects
c1.drive();
c2.drive();




/**
 * Prototype Chaining: JavaScript always searches for properties in the objects of the constructor function first.
Then, it searches in the prototype.
This process is known as prototype chaining.**/

function Car() {
    this.color = "Red";
};

// add property that already exists
Car.prototype.color = "Blue";

// add a new property
Car.prototype.wheels = 4;

const c1 = new Car();
const c2 = new Car();

console.log(`The car's color is ${c1.color}.`); 
console.log(`The car has ${c1.wheels} wheels.`);