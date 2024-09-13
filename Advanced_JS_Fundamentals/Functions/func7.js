// constructor function
function Person() {

    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);

        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();






let age = 5;

let welcome = (age < 18) ?
    () => console.log("Child") :
    () => console.log("Adult");

welcome(); 

// let a=1 , b =2 
// (a==b) ? true : (a>b)? (b/a)? 'Hi': 'bye': false 