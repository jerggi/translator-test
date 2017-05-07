const fs = require('fs')
const dist = require('../levenshtein')

const text = fs.readFileSync('data/test.dict', 'utf8')

function find (words) {
    let word = null
    let translation = null
    let newLine = true

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '\n' || i === text.length - 1) {
            newLine = true
            if (translation && word) {

                const pureWord = word.split(' ')[0]
                words.forEach((wordToFind) => {
                    if (dist(wordToFind, pureWord) <= 1) {
                        console.log(`Word: ${wordToFind}, Match: ${pureWord}, Translation: ${translation}`)
                    }
                })

                translation = null
            }
        } else {
            if (newLine) {
                if (text[i] === ' ') {
                    translation = text[i]
                } else {
                    word = text[i]
                }
            } else {
                if (translation) {
                    translation += text[i]
                } else {
                    word += text[i]
                }
            }
            newLine = false
        }
    }
}

module.exports = find
