const connection = require("../config/connections.js");


const getWatch = (id) => {
  return connection.query(
    `
    select * from users join video on users.username = video.created_by where video.id=$1`,
    [id]
  );
};

module.exports = getWatch;
