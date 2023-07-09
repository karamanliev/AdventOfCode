const fs = require('fs')

function getStringInput() {
    return new Promise((resolve, reject) => {
        fs.readFile('./input.txt', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data.toString())
            }
        })
    })
}

module.exports = { getStringInput }
