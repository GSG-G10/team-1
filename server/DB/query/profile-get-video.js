const connection = require("../config/connections.js");


const getVideo = (username) => {
  return connection.query(`
    select * from users
    join video on users.username = video.created_by where created_by = '${username}';`);
};

module.exports = getVideo;
