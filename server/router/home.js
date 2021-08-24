const express = require('express')
const path = require('path')
const routerHome = express.Router()

routerHome.get('/', (req, res)=>{

    res.sendFile(path.join(__dirname,'../../public/home/index.html'))

})


module.exports = routerHome