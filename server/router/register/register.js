const signUser = require('../../DB/query/signup');
const emailExist = require('../../DB/query/email-exist');
const regValidation = require('./schemaReg');
const schemaReg= require('./schemaReg');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const express = require('express');
const bcrypt= require('bcrypt');
const routerRegister= express.Router();

routerRegister.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../../public/register/index.html'))
})

routerRegister.post('/', async (req, res) => {
    try{
    const {email, password} = await regValidation.validateAsync(req.body);
    const {rowCount} = emailExist(email);
    console.log(password);

    if(rowCount > 0){
        console.log('this emil is logged');
        return;
    }

    console.log(req.body.full_name);
    const username = req.body.full_name;
    const hashPass= await bcrypt.hash(password, 10);
    const {rows} = await signUser(
        req.body.full_name, 
        req.body.email,
         hashPass,
    );

    const token = jwt.sign({usernme: username, password: password}, 'eman');
     res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .redirect('/');
    }
    catch(err){
        console.log(err);
    }
} );

module.exports = routerRegister;
