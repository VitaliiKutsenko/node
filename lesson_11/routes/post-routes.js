const express = require('express')
const createPath = require('../helper')

const router = express.Router()


const Post = require("../models/post");

router.post('/add-post', (req, res) => {
    const {title, author, text} = req.body
    const post = new Post({
        title, author, text
    })
    post.save()
        .then(result => res.redirect('/posts'))
        .catch(error => {
            console.log(error)
            res.render(createPath('error'), {title: 'Error'})
        })
})

router.get('/add-post', (req, res) => {
    const title = 'create post'

    res.render(createPath('add-post'), {title})
})


router.get('/edit/:id', (req, res) => {
    const title = 'Edit post'
    const id = req.params.id
    Post
        .findById(id)
        .then(post => {
            res.render(createPath('edit-post'), {post, title})
        })
        .catch(error => {
            console.log(error)
            res.render(createPath('error'), {title: 'Error'})
        })
})

router.put('/edit/:id', (req, res) => {
    const {title, author, text} = req.body
    const {id} = req.params
    Post.findByIdAndUpdate(id, {title, author, text})
        .then(result => res.redirect(`/posts/${id}`))
        .catch(error => {
            console.log(error)
            res.render(createPath('error'), {title: 'Error'})
        })
})

router.get('/posts/:id', (req, res) => {
    const title = 'post'
    const id = req.params.id
    Post
        .findById(id)
        .then(post => {
            res.render(createPath('post'), {post, title})
        })
        .catch(error => {
            console.log(error)
            res.render(createPath('error'), {title: 'Error'})
        })
})

router.delete('/posts/:id', (req, res) => {
    const title = 'post'
    const id = req.params.id
    Post
        .findByIdAndDelete(id)
        .then(post => {
            res.render(createPath('post'), {post, title})
        })
        .catch(error => {
            console.log(error)
            res.render(createPath('error'), {title: 'Error'})
        })
})

router.get('/posts', (req, res) => {
    const title = 'posts'
    Post
        .find()
        .sort({createdAt: -1})
        .then(posts => {
            res.render(createPath('posts'), {posts, title})
        })
        .catch(error => {
            console.log(error)
            res.render(createPath('error'), {title: 'Error'})
        })
})

module.exports = router