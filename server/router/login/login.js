const express = require('express')
const path = require('path')
const routerLogin = express.Router()


routerLogin.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../../../public/login/index.html'))
})

routerLogin.post('/', (req, res)=>{
    console.log(req.body);
    res.redirect('/home')
})


module.exports = routerLogin