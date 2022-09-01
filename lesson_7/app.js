// create server

const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
    console.log('serv request')
    // res.setHeader('Content-Type', 'text/html')
    // res.write(`<h1>'hello world'</h1>`)
    res.setHeader('Content-Type', 'application/json')

    const data = JSON.stringify([
        {name: 'Vitalii', age: 33},
        {name: 'Anastasiya', age: 28}
    ])
    res.end(data)
})

server.listen(port, 'localhost', err => {
    err ? console.log(err) : console.log(`listen port ${port}`)
})