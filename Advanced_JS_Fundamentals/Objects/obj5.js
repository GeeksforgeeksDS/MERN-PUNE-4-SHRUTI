// constructor function
function Person () {
    this.name = "John",
    this.age = 23
}

// create an object
const person = new Person();

// print object attributes
console.log(person.name);
console.log(person.age);



const person2 = new Person();

// access properties
console.log(person.name);  
console.log(person2.name);






// constructor function with parameters
function Person (name, person_age, person_gender) {

    // assign parameter values to the calling object
     this.name = name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return (`Hi ${this.name}`);
     }
 }
 
 // create objects and pass arguments
 const person11 = new Person("John", 23, "male");
 const person22 = new Person("Sam", 25, "female");
 
 // access properties
 console.log(person11.name); 
 console.log(person22.name); 
 console.log(person22.greet());




// use Object() constructor to create object
const person0 = new Object({ name: "John", age: 30 });

// use String() constructor to create string object
const name1 = new String ("John");

// use Number() constructor to create number object
const number = new Number (57);

// use Boolean() constructor to create boolean object
const count = new Boolean(true);

console.log(person0);
console.log(name1);
console.log(number);
console.log(count);


