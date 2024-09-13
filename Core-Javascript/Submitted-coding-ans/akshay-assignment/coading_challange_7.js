let str = "Hello , my name is akshay"; 
let words = str.split(' ');
let reversedWordsStr = '';

for (let i = words.length - 1; i >= 0; i--) {
    if (i < words.length - 1) {
        reversedWordsStr += ' ';
    }
    reversedWordsStr += words[i];
}

console.log(reversedWordsStr); 
