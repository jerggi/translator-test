if (process.argv.length > 2) {
    let findFn
    const words = ['schwimmen', 'willkommen', 'katze', 'grose']
    
    if (process.argv[2] === 'string') {
        findFn = require('./compare/string')

        console.log('Memory usage: ', process.memoryUsage())
        console.time('STRING TIME')
        findFn(words)
        console.timeEnd('STRING TIME')
    } else if (process.argv[2] === 'map') {
        findFn = require('./compare/map')

        console.log('Memory usage: ', process.memoryUsage())
        console.time('MAP TIME')
        findFn(words)
        console.timeEnd('MAP TIME')
    } else {
        console.log('No valid arguments were specified. Valid arguments are: "string", "map"')
    }
} else {
    console.log('No valid arguments were specified. Valid arguments are: "string", "map"')
}
