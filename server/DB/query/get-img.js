const connection = require("../config/connections.js");

const getAvatar = (id) => {
  return connection.query(`select img_profile from users where user.id = $1`, [
    id,
  ]);
};

module.exports = getAvatar;
