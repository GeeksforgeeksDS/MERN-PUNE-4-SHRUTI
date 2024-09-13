// Find the maximum number in an array of numbers

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = nums[0];
for (i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
}
console.log(max);