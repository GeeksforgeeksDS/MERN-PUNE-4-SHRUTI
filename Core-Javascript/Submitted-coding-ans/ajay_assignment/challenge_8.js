// Create a function that will merge two arrays and return the result as a new array

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [];

function mergeArrays(arr1, arr2) {
    arr1.forEach(element => {
        arr3.push(element);
    });
    arr2.forEach(element => {
        arr3.push(element);
    });
    return arr3;
}

console.log(mergeArrays(arr1, arr2));