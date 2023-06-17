const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => resolve(data))
    })
}

getFile('./start.txt')
.then(data => {
    console.log(`${data}`)
    return getFile(`${data}`) })
    .then(data => {
        console.log(`${data}`)
        return getFile(`${data}`) })
        .then(data => {
            console.log(`${data}`)
            return getFile(`${data}`) })
            .then(data => {
                console.log(`${data}`)
                return getFile(`${data}`) })