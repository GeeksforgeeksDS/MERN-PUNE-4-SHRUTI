let numbers=[1,20,50,30,80,70];

let max=numbers[0];

for ( let i=1 ; i<numbers.length; i++) {
  if (numbers[i]>max){
    max=numbers[i];
  }
}
console.log(max);