// Calculate the sum of odd numbers greater than 10 and less than 30

let sum = 0;
for (i = 10; i < 30; i++) {
    if (i % 2 === 0) {
        continue;
    }
    sum += i;

}
console.log(sum);