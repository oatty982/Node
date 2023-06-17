var fs = require('fs');

function readMessage() {
    return new Promise(function (fulfill, reject) {
        fs.readFile('message.txt', 'utf8', function (err, res) {
            if (err) reject(err);
            else fulfill(res);
        });
    });
}

function writeMessage(dat) {
    return new Promise(function (fulfill, reject) {
        fs.writeFile('out.txt', dat,'utf8', function (err, res) {
            if (err) reject(err);
            else fulfill(res);
        });
    });
}

// readMessage()
//     .then(data => writeMessage(data))
//     .then(function(){console.log('success')
// });

readMessage()
    .then(function (data) {
        return writeMessage(data);
    })
    .then(function () {
        console.log('success');
    })
    .catch(function (err) {
        console.error('error:', err);
    });