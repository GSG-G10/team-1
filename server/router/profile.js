const express = require('express')
const path = require('path')
const routerProfile = express.Router()
const getProfileVIdeo = require('../DB/query/profile-get-video')
routerProfile.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../../public/profile/index.html'))
})

routerProfile.post('/', (req, res)=>{
    console.log(req.body);
    res.json(req.body)
})

routerProfile.get('/myvideo', (req, res)=>{

    getProfileVIdeo("mostafa")
    .then(data =>{
        console.log(data.rows);
        res.json(data.rows)
    })
    .catch(console.log)



})





module.exports = routerProfile