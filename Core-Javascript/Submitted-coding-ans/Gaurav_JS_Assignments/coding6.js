let arr = [34, 2, 3, 5, 6, 122, 65];

function maxFn(value) {
    return value === Math.max(...arr);
}

let res = arr.filter(maxFn);
console.log(res);
