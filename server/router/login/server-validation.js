const joi = require("joi");
const loginSchema = require("./schemaLog");

const serverValidation = function (requestBody) {
  const { error, value } = loginSchema.validate(requestBody);
  const email = value.email;
  const password = value.password;
  const username = value.username;
  return { username, email, password };
};

module.exports = serverValidation;
