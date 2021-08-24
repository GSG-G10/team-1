const express = require('express')
const path = require('path')
const routerAddVideo = express.Router()

routerAddVideo.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../../public/login/index.html'))
})

routerAddVideo.post('/', (req, res)=>{
    console.log(req.body);
    res.json(req.body)
})


module.exports = routerAddVideo