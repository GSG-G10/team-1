const express = require('express')
const path = require('path')
const joi = require('joi');
const loginSchema = require('./schemaLog')

const routerLogin = express.Router()

routerLogin.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../../public/login/index.html'))
})


routerLogin.post('/', (req, res)=>{
    const {error, value} = loginSchema.validateAsync(req.body)
                            .then(res => res.redirect('/auth'))
                            .catch(res.status(400).send('<h2>Robot!</h2>'))
    
})


module.exports = routerLogin