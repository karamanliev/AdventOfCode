const fs = require('fs')

function getStringInput() {
    const input = fs.readFileSync('./input.txt').toString().trim()

    return input
}

module.exports = { getStringInput }
