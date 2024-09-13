// Sum of odd numbers greater 10 to less than 30 

let start = 10
let end = 30
let sum = 0
for(let i = start; i<= end; i++)
{
    if(i%2==1)
    {
        sum += i
    }
}
console.log(sum);
