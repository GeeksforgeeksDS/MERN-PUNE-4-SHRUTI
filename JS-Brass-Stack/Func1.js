// const a = function() {
//     console.log('I am from function expression - a');
//   };

//   function b(a){ 		
//     console.log('Hey I am from function - b');
//     a();
//   }
//   b(a);

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