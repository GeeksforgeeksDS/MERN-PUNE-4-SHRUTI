function add(a = 0, b = 0) {
    return a + b;
  }
  
  console.log(add(10, 5)); 
  console.log(add(10)); 
  console.log(add());

  

  function myFunc(a,b,...extraArgs) {
    console.log('a = ',a);
    console.log('b = ',b);
    console.log('Extra Arguments = ',extraArgs); 
  }
  myFunc(1, 2, 3, 4, 5);