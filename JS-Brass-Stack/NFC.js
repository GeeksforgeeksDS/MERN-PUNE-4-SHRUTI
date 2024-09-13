function outermost(a) {
  function outer(b){
    function inner(c){
      console.log("outermost function: a = ",a);
      console.log("outer function: b = ",b);
      console.log("inner function: c = ",c);
    }
  inner(3);
  }
 outer(2);
}
outermost(1);


// 

function intro() {
    introduce = 'Hello';
    return function () {
        console.log(introduce + ' World!');
    }
}

intro()();





// 
function GrandFather() {
	let car = 'Maruti';
	console.log("Hi! I'm GrandFather and I can access", car)
	function Father() {  
		let bike = 'Honda';
		console.log("Hi! I'm Father and I can access", car, bike)
		function Son() { 
			let cycle = 'Hero';
			console.log("Hi! I'm Son and I can access", car, bike, cycle)
		}
		return Son()
	}
	return Father()
}
GrandFather()



//


function demo(){
    let x = 5;
      function anotherDemo(x){
          return x*3;
      }
      return anotherDemo;
  }
  console.log(demo()(10));


  //

  function outest(){
    var c = 12; 
    function outer(b){ 
      function inner(){
        console.log(a, b, c); 
      }
      let a =10;
      return inner;
    }
    return outer;
  }
  
   
  var close = outest()("Hi Closures"); 
  close();


//   
function outest(){
    function outer(b){ 
      function inner(){
        console.log(a*b)
      }
      // let a =10;
      return inner;
    }
    return outer;
  }
  
  let a =100; 
  var close = outest()(3); 
  close(); 