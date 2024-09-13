const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (!count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});
// console.log(countValue);
countValue
.then((resp )=>console.log(resp))
.catch((err)=> console.log(err))
