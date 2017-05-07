const dist = require('../levenshtein')
const dict = require('../data/test.json')

function find (words) {
    for (let key in dict) {
        words.forEach((wordToFind) => {
            if (dist(wordToFind, key) <= 1) {
                console.log(`Word: ${wordToFind}, Match: ${key}, Translation: ${dict[key]}`)
            }
        })
    }
}

module.exports = find
