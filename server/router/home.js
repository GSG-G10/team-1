const express = require('express')
const path = require('path')
const routerHome = express.Router()



routerHome.get('/', (req, res)=>{
    const { token } = req.cookies;
    console.log(token);
    console.log('1111111111111111');
    // res.sendFile(path.join(__dirname,'../../public/home/index.html'))
})


module.exports = routerHome