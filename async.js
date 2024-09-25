const fs = require('fs');
const https = require('https');

console.log("Hello world");

// fs.writeFile('file.txt', "This is the file data", 'utf-8', () => {
//     console.log("file created successfully");
// })
console.time('a');
fs.appendFile('file.txt', 'This is appended text.', 'utf8', (err) => {
    if (err) throw err;
    console.timeEnd('a');
    console.log('Data appended to file!');
  });
setTimeout(() => {
    fs.readFile('file.txt', 'utf-8', (err, data) => {
      console.log(data);
    })
},1) 

setTimeout(() => {
    console.log("timer completed")
}, 5000);


https.get('https://api.github.com/users/shanavasrahman', (res) => {
    console.log("data fetched successfully");
})


