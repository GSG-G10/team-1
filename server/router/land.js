const express = require('express')
const path = require('path')
const routerHome = express.Router()



routerHome.get('/', (req, res)=>{
    
    res.sendFile(path.join(__dirname,'../../public/land/index.html'))
})


module.exports = routerHome