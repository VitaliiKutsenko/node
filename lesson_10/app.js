const express = require('express')
const path = require("path");
const server = express()
const port = 3000

server.set('view engine', 'ejs')

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.ejs`)

server.listen(port, err => {
    err ? console.log(err) : console.log(`listen port ${port}`)
})

server.use(express.static('lesson_10/styles'))

server.get('/', (req, res) => {
    const title = 'home'
    res.render(createPath('index'), {title})
})

server.get('/contacts', (req, res) => {
    const title = 'contacts'
    const contacts = [
        {
            name: 'YouTube',
            link: "http://youtube.com/YauhenKavalchuk"
        },
        {
            name: 'Twitter',
            link: "http://github.com/YauhenKavalchuk",
        },
        {
            name: 'GitHub',
            link: "http://twitter.com/YauhenKavalchuk",
        }

    ]

    res.render(createPath('contacts'), {contacts, title})
})

server.get('/add-post', (req, res) => {
    const title = 'create post'
    res.render(createPath('add-post'), {title})
})

server.get('/posts/:id', (req, res) => {
    const title = 'post'

    res.render(createPath('post'), {title})
})

server.get('/posts', (req, res) => {
    const title = 'posts'

    res.render(createPath('posts'), {title})
})


server.get('/about-us', (req, res) => {
    res.redirect('/contacts')
})

server.use((req, res) => {
    const title = 'error page'
    res
        .status(404)
        .render(createPath('error'), {title})
})