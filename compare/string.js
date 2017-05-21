const fs = require('fs')
const dist = require('../levenshtein')

const text = fs.readFileSync('data/test.dict', 'utf8')

function find (words) {
    let word = null
    let translation = null
    let newLine = true
    let w = ''
    let t = ''

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '\n' || i === text.length - 1) {
            newLine = true
            const endIndex = i
            if (translation !== null) {

                const pureWord = w.split(' ')[0]
                t = text.substring(translation, i)
                words.forEach((wordToFind) => {
                    if (dist(wordToFind, pureWord) <= 1) {
                        console.log(`Word: ${wordToFind}, Match: ${pureWord}, Translation: ${t}`)
                    }
                })

                translation = null
            } else {
                w = text.substring(word, i)
            }
        } else {
            if (newLine) {
                if (text[i] === ' ') {
                    translation = i
                } else {
                    word = i
                }
                newLine = false
            }
        }
    }
}

module.exports = find
