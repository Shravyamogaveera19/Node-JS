const fs = require('fs');

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"), 0);

fs.readFile('textfile.txt',() =>{
    console.log("I/O Finished");
})

console.log("Hello from the top -level code");