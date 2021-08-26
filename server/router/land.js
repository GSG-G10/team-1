const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");
const routerLand = express.Router()
require('env2')('./config.env');
const router = require("express").Router();

router.use(cookieParser())

routerLand.get('/', (req, res)=>{
    
    const token = req.headers.cookie?.split("=")[1];
    if(!token)
        return res.sendFile(path.join(__dirname,'../../public/land/index.html'));

    const secretBin= process.env.SECRET;
    const decoded = jwt.verify(token, secretBin);
    if(decoded.logged_in) {
        res.sendFile(path.join(__dirname,'../../public/home/index.html'))
    }
    else {
        res.sendFile(path.join(__dirname,'../../public/land/index.html'))
    }
})


module.exports = routerLand
