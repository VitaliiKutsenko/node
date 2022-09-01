// buffer & stream

const fs = require('fs')
const readStream = fs.createReadStream('./lesson_6/test.txt')
/* читайющий стрим */
readStream.on('data', (chunk) => {
    console.log('_____________________________________')
    console.log(chunk.toString())
})
const writeStream = fs.createWriteStream('./lesson_6/new-test.txt')

readStream.on('data', (chunk) => {
    writeStream.write(chunk)
})