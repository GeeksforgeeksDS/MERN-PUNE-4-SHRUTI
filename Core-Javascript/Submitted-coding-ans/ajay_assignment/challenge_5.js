// Calculate the average of the numbers in an array of numbers

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let avg = 0;
for (i = 0; i < nums.length; i++) {
    sum += nums[i];
}
avg = sum / nums.length;
console.log(avg);