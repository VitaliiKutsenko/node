const express = require('express')
const mongoose = require('mongoose')
const Contacts = require('./models/contacts')
const methodOverride = require('method-override')
const dbUrl = `mongodb+srv://vitalii89:fjelappe89@cluster0.8wvixi3.mongodb.net/node_blog?retryWrites=true&w=majority`
const postRouter = require('./routes/post-routes')
const contactsRouter = require('./routes/contacts-routes')
const createPath = require('./helper')
mongoose
    .connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => console.log('connected to db'))
    .catch(err => console.log(err))

const server = express()
const port = 3000

server.set('view engine', 'ejs')

server.listen(port, err => {
    err ? console.log(err) : console.log(`listen port ${port}`)
})
server.use(methodOverride('_method'))
server.use(express.static('lesson_11/styles'))
server.use(express.urlencoded({extended: false}))


server.get('/', (req, res) => {
    const title = 'home'
    res.render(createPath('index'), {title})
})
server.use(postRouter)
server.use(contactsRouter)


server.use((req, res) => {
    const title = 'error page'
    res
        .status(404)
        .render(createPath('error'), {title})
})