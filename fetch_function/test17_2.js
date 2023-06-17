function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min ) ) + min ;
}

function pmRandom() {
    return new Promise( (rsv,rj) => {
        let n = getRandom(1,9)
            if (n < 7) rsv(n)
            else rj(n)
    })
}

const pm1 = pmRandom()
const pm2 = pmRandom()
const pm3 = pmRandom()

Promise.all( [pm1, pm2, pm3]).then( r => {
    console.log('Pass all')
    console.log(r)
}).catch( e => {
    console.log('not Pass')
    console.log(e)
})