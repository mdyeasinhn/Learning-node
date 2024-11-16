const fs = require('fs');

// Reading a file text
const readText = fs.readFileSync('./Read/read.txt', 'utf-8');

// Writing to a file
fs.writeFileSync('./Read/write.txt', readText + "This is my written text");

console.log("File written successfully!");
