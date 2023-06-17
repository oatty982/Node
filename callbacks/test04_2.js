const fs = require('fs');

for (let i = 0; i < 20; i ++) {
    fs.readFile('./test_1.txt', 'utf-8', (err,data) => {
        console.log(data);
    });
}
fs.readFile('./test_2.txt', 'utf-8',(err,data) => {
    console.log(data);
});