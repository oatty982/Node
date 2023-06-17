let done = true

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still worjing in something else'
        reject(why)
    }
})

// function checkIfItsDone() {
const checkIfItsDone = () => {
    isItDoneYet
    .then( ok => {
        console.log('come from resolve state in Promise')
        console.log(ok)
    })
    .catch(err => {
        console.log('come from reject state in Promise')
        console.log(err)
    })
}

checkIfItsDone()