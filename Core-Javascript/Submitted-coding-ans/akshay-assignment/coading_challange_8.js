let words=["hello","bye","coming","going"];
let numbers=[11,23,46,89];
function mergeArrays(words, numbers) {
  return words.concat(numbers);
}
let merge=mergeArrays(words,numbers);
console.log(merge);