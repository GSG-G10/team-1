const express = require('express')
const path = require('path')
const routerProfile = express.Router()

routerProfile.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../../public/profile/index.html'))
})

routerProfile.post('/', (req, res)=>{
    console.log(req.body);

    res.json(req.body)
})


module.exports = routerProfile