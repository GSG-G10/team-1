const express = require('express')
const path = require('path')
const routerWatch = express.Router()

routerWatch.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../../public/login/index.html'))
})


module.exports = routerWatch