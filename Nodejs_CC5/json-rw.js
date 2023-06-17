const fs = require('fs')
let data, jsobj, users

data = fs.readFileSync('./sample.json')
jsobj = JSON.parse(data)
users = jsobj.users

users.map( x => {
    x.phoneNumber = x.userId.toString().repeat(7)
    if (x.lastName === 'mac') x.lastName = 'Apple'
    console.log(`${x.firstName} : ${x.phoneNumber}`)
})

newdata = JSON.stringify(jsobj)
fs.writeFileSync('./output.json', newdata)
console.log('Save output.json OK')