const express = require('express')
const path = require('path')
const routerHome = express.Router()
const getVideo = require('../DB/query/get-video')


routerHome.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../../public/home/index.html'))
})

routerHome.get('/getvideo/:page', (req, res)=>{
    let { page } = req.params
    let pageCurrnt = page.split(':')[1]
    getVideo(pageCurrnt)
    .then(data =>{
        res.json(data.rows)
    })
    .catch(console.log)
})

module.exports = routerHome