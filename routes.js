const express = require('express')
const routes = express.Router()
const emailSending = require('./contact')

routes.post('/email', emailSending )
routes.get('/', (req, res)=>{
    res.json({message: 'server is Up'})
})


module.exports = routes 