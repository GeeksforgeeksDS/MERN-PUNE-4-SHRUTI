// Find the length of the longest substring without repeating characters

let lgtsub = (str) => {
    let arr = [];
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i])) {
            arr = arr.slice(arr.indexOf(str[i]) + 1);
        }
        arr.push(str[i]);
        max = Math.max(max, arr.length);
    }
    return max;
}

console.log(lgtsub("abcabcbb"));