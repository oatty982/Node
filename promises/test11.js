// console.log('1')
// setTimeout( () => { console.log('2') }, 1000 )
// console.log('3')

// ------------------------------------------------

// const pm = new Promise( (rs,rj) => {
//     setTimeout( () => {
//         console.log('2')
//         rs()
//     },1000)
// })

// console.log('1')

// pm.then( () => {
//     setTimeout( () => {
//         console.log('3')
//     },1000)
// })

// ------------------------------------------------

// console.log('1')
// new Promise( rs =>
//     setTimeout( () => {
//         console.log('2')
//         rs()
//     },1000)).then( () => {
//         console.log('3')
//     })

// ------------------------------------------------

console.log('1')
new Promise( rs =>
    setTimeout( () => {
        console.log('2')
        rs()
    },1000)).then( () => {
new Promise( rs =>
    setTimeout( () => {
        console.log('3')
        rs()
    },1000))}).then( () => {
    setTimeout( () => {
        console.log('4')
    },1000)
})
