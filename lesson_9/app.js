const express = require('express')
const path = require("path");
const server = express()
const port = 3000

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

server.listen(port, err => {
    err ? console.log(err) : console.log(`listen port ${port}`)
})

server.get('/', (req, res) => {
    res.sendFile(createPath('index'))
})

server.get('/contacts', (req, res) => {
    res.sendFile(createPath('contacts'))
})

server.get('/about-us', (req, res) => {
    res.redirect('/contacts')
})

server.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('error'))
})