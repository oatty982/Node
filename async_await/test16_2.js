const fs = require('fs');

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        // if (fileName.toString()==='f01.txt') reject('Error from f02')
        fs.readFile(fileName, (err, data) => resolve(data))
    })
}

async function runGetFile () {
    try {
    let data = await getFile('./start.txt')
    console.log(`${data}`)
    data = await getFile(data)
    console.log(`${data}`)
    data = await getFile(data)
    console.log(`${data}`)
    data = await getFile(data)
    console.log(`${data}`)
    } catch(err) {
        console.error('error : ' + err)
    }
}

runGetFile();

// getFile('./start.txt')
// .then(data => {
//     console.log(`${data}`)
//     return getFile(`${data}`) })
//     .then(data => {
//         console.log(`${data}`)
//         return getFile(`${data}`) })
//         .then(data => {
//             console.log(`${data}`)
//             return getFile(`${data}`) })
//             .then(data => {
//                 console.log(`${data}`)
//                 return getFile(`${data}`) })