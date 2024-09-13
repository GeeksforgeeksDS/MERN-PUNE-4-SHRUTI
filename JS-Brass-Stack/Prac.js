
//1
var x = 1;
function foo() {
 x = 10;
 return;
 function x() {}
}
foo();
console.log(x); 

//2
var name = "Lokesh Prajapati";
(function() {
 console.log(name);
 var name = "Lokesh Prajapati";
})(); 


//3
function sayHelloWorld() {
    return sayGoodbyeWorld();
    var sayGoodbyeWorld = function() {
    return "Hello, World!";
    };
    function sayGoodbyeWorld() {
    return "Goodbye, World!";
    }
   }
   console.log(sayHelloWorld());

//4
function sayHi() {
    return hi;
    var hi = "Hello, World!";
   }
   console.log(sayHi());

//5
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }

//6
var name = "Alice";
console.log(`Hello, ${name}!`);
name = "Bob";

//7
const obj = {
    a: "foo",
    b: function () {
      console.log(this.a);
    },
  };
  
  const c = obj.b;
  
  obj.b();
  c();

//8

const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x));
console.log(addFoo(y));

//9
let a = {
    x: 1,
    y: 2,
  };
  let b = a;
  a.x = 5;
  console.log(a);
  console.log(b);

//10
let num = 0;

function test() {
  var num = 1;
  return num;
}

console.log(test());
console.log(num);

//11
const x = 10;

function foo() {
  console.log(x);
  const x = 20;
}

foo();

//12
let x = 10;

function updateX() {
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}

updateX();

//13
let x = 10;

function outer() {
  console.log(x);

  if (false) {
    var x = 20;
  }
}

outer();

//14
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

//15
var bb = 1;
function outer(){
   	var bb = 2
    function inner(){
        bb++;
        var bb = 3;
        console.log(bb)
    }
    inner();
}
outer();