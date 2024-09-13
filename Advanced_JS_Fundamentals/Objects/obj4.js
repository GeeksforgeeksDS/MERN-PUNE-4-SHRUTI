const employee = {
    name: "Tony",
    position: "Officer",
    salary: 30000,
};

// delete object property
delete employee.salary


console.log(employee);




const person1 = {
    name: "Bob",
    age: 30,
    greet: function () {
        console.log("Bob says Hi!");
    }
};

person1.greet(); 



// person object
const person = {
    name: "John",
    age: 30,
    introduce: function () {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`); //this keyword in an object method to access a property of the same object
    }
};

// access the introduce() method
person.introduce();




// student object
let student = {
    name: "John"
};

// add new method
student.greet = function () {
    console.log("Hello");
};

// access greet() method
student.greet();