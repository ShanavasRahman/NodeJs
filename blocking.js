const crypto = require('node:crypto');

console.log("Hai, I'm first");

// let a = crypto.pbkdf2Sync('shanavas', "salt", 50000, 50, "sha512");
// console.log(a);
testing();
console.time("b");
function testing() {
    setTimeout(() => {
        console.log("timeout inside the function");
        console.timeEnd("b");

    },0)
}

console.time("a");
setTimeout(() => {
    console.log("timeout outside the function")
console.timeEnd("a");
},0);


console.log("I'm at last");