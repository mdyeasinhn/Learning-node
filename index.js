// local module 
const {a, add} = require('./local-1');
const {a : a2, add : add2} = require('./local');

console.log(add(2,3));


// build in module 
const path  = require("path");
console.log(path.parse("D:/NEXTlAVELWORK/learning node/index.js"));