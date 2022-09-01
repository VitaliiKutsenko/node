// create files & dirs
const fs = require('fs')
const newPath = './files/test2.txt'
const newDir = './files'

fs.readFile('./lesson_4/test.txt', 'utf8', (error, data) => {
    /* 1) path files add to method at first argument
    2) unicode for use normal symbols
    3) callback fn for get text
    */

    fs.mkdir(newDir, () => {
        /*
        1) use [fs.mkdir] for create new dir
        */
        fs.writeFile(newPath, `${data} \n new text`, (error) => {
            error ? console.log(error) : null
        })
        /* 1) use [fs.writeFile] for create and write text in new copy
         2) add file data or write new data in 2 args
         3) add callback fn for catch error
         */
    })

})
setTimeout(() => {
    if (fs.existsSync(newPath)) {
        fs.unlink(newPath, () => {
        })
    }
}, 5000)

setTimeout(() => {
    if (fs.existsSync(newDir)) {
    }
}, 6000)