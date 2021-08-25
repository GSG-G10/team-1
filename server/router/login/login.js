const express = require('express')
const path = require('path')
const joi = require('joi');
const loginSchema = require('./schemaLog')
const serverValidation = require('./server-validation');

const routerLogin = express.Router()


routerLogin.post('/', async (req, res)=>{
   const {email, password} = await serverValidation(req.body);

if (email){
    console.log(email,password);
}
else{
    console.log('you are not allowd anymore!');
}
//    const x = serverValidation(req.body);
//    console.log(x);


})


module.exports = routerLogin