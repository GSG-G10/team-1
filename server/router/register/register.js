const express = require('express')
const path = require('path')
const routerRegister = express.Router()


routerRegister.get('/', (req, res)=>{

    res.sendFile(path.join(__dirname,'../../public/register/index.html'))
})

routerRegister.post('/', (req, res)=>{
    console.log(req.body);
    res.redirect('/login')
})

module.exports = routerRegister