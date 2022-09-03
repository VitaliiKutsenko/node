// base routing
const http = require('http')
const fs = require('fs')
const path = require('path')

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

const port = 3000
const server = http.createServer((req, res) => {
        res.setHeader('Content-Type', 'text/html')
        let page
        switch (req.url) {
            case '/' :
                page = createPath('index')
                res.statusCode = 200
                break
            case '/about-us' :
                res.statusCode = 301
                res.setHeader('Location', '/contacts')
                res.end()
                break
            case '/contacts' :
                page = createPath('contacts')
                res.statusCode = 200
                break
            default :
                page = createPath('error')
                res.statusCode = 404
        }

        fs.readFile(page, (err, data) => {
            if (err) {
                console.log(err)
                res.statusCode = 500
                res.end()
            } else {
                res.write(data)
                res.end()
            }
        })
    })
    < h1 >
    server.listen(port, 'localhost', err => {
        err ? console.log(err) : console.log(`listen port ${port}`)
    })