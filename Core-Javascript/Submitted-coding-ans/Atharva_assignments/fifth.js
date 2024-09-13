let arr=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
for(let i=0; i<arr.length;i++ )
{
    sum=sum+arr[i];
}
let average=sum/arr.length;
console.log( `Average of values = ${average}`);