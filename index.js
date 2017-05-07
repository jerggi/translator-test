const findInString = require('./compare/string')
const findInMap = require('./compare/map')
const words = ['schwimmen', 'willkommen', 'katze', 'grose']

/*console.time('STRING')
findInString(words)
console.timeEnd('STRING')*/

console.time('MAP')
findInMap(words)
console.timeEnd('MAP')
