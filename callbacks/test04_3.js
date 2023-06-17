const fs = require('fs');

for (let i = 0; i < 20; i ++) {
    const d1 = fs.readFileSync('./test_1.txt', 'utf-8')
    console.log(d1)
    const d2 = fs.readFileSync('./test_2.txt', 'utf-8')
    console.log(d2)
}