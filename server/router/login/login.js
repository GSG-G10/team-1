const express = require('express')
const path = require('path')
const joi = require('joi');
const bcrypt = require('bcrypt')
const loginSchema = require('./schemaLog')
const serverValidation = require('./server-validation');
const emailExists = require('../../DB/query/email-exist')
const createCookie = require('./authentication')

const routerLogin = express.Router()


routerLogin.post('/', async (req, res)=>{
   const {username, email, password} = await serverValidation(req.body);
    if (email){
    const emails = await emailExists(email);
    const rowsCount =emails.rowCount;
    if(rowsCount > 0){
        const dbPassword = emails.rows[0].password;
        
            if(bcrypt.compareSync(password, dbPassword)){
                res.cookie("data", createCookie(username, email), { httpOnly: true, secure: true });
                res.redirect('/home')

            }
            else{
                console.log('password is incorrect');
                res.json({'msg':'incorrect Password'});
            }
    } 
    else{
        console.log('you have to sign up first');
    }
    
}
else{
    console.log('you are not allowd anymore!');
}

})


module.exports = routerLogin