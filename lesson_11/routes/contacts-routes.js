const express = require('express')
const createPath = require('../helper')
const router = express.Router()
const Contacts = require("../models/contacts");

router.get('/contacts', (req, res) => {
    const title = 'contacts'
    Contacts
        .find()
        .then(contacts => res.render(createPath('contacts'), {contacts, title}))
        .catch(error => {
            console.log(error)
            res.render(createPath('error'), {title: 'Error'})
        })
})
router.get('/about-us', (req, res) => {
    res.redirect('/contacts')
})

module.exports = router