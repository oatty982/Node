const rd = require('./myUtil')

console.log(rd.getRandom())
console.log(rd.circleArea())
console.log(rd.user)
console.log(rd.user.name)
rd.user.name = "Mary"
console.log(rd.user)

// ------------------------------

// console.log(rd.getRandom(0,20))
// console.log(rd.circleArea(20))