const fs = require('fs');

const data = fs.readFileSync('./readme.txt', 'utf-8');

console.log(data)
