function mergeArrays(arr1, arr2) 
{
    let mergedArray = [];
    mergedArray = mergedArray.concat(arr1, arr2);
    return mergedArray;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = mergeArrays(array1, array2);
console.log(result);
