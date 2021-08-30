const express = require('express')
const routes = express.Router()
const emailSending = require('./contact')

routes.post('/email', emailSending )


module.exports = routes 