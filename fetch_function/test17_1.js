function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min ) ) + min ;
}

const pm1 = new Promise( (rsv,rj) => {
    let n = getRandom(1,9)
        if (n < 5) rsv(n)
        else rj(n)
})

const pm2 = new Promise( (rsv,rj) => {
    let n = getRandom(1,9)
        if (n < 5) rsv(n)
        else rj(n)
})

const pm3 = new Promise( (rsv,rj) => {
    let n = getRandom(1,9)
        if (n < 5) rsv(n)
        else rj(n)
})

Promise.all( [pm1, pm2, pm3]).then( r => {
    console.log('Pass all')
    console.log(r)
}).catch( e => {
    console.log('not Pass')
    console.log(e)
})