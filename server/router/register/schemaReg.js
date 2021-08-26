const joi = require("joi");
const regSchema = joi.object({
  full_name: joi.string().alphanum().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  confirm_password: joi.any().valid(joi.ref("password")).required(), //.options({ language: { any: { allowOnly: 'must match password' } } }),
});


module.exports = regSchema;
