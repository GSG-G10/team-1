const joi = require('joi');
const loginSchema = require('./schemaLog')

const serverValidation = function (requestBody){
    const {error, value} = loginSchema.validate(requestBody);
    // if (error) {
    //     return "you are not allowed anymore!"
    // }
    // else{
        const email = value.email;
        const password = value.password;
        return {email, password};
    // }
    

    
}

module.exports= serverValidation;