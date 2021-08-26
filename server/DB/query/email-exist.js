const connection = require("../config/connections");


const emailExists = (email) => {
  const sql = {
    text: "SELECT * FROM users WHERE email = $1",
    values: [email],
  };

  return connection.query(sql);
};

module.exports = emailExists;
