const fs = require('fs');

fs.readFile('./readme.txt', function(err,data) {
    if (err) throw err;
    console.log(data);
    console.log(data.toString());
})
console.log('Done..');