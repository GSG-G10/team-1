const express = require('express')
const path = require('path')
const joi = require('joi');
const loginSchema = require('./schemaLog')
const serverValidation = require('./server-validation');
const emailExists = require('../../DB/query/email-exist')

const routerLogin = express.Router()


routerLogin.post('/', async (req, res)=>{
   const {email, password} = await serverValidation(req.body);

if (email){
    const x =emailExists(email); 
    console.log(x);
}
else{
    console.log('you are not allowd anymore!');
}


})


module.exports = routerLogin