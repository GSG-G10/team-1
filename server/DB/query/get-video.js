const connection = require("../config/connections.js");

const getVideo = (pageCurrnt) => {
  if(pageCurrnt == 0){
    return connection.query(`
    select * from users join video on users.username = video.created_by OFFSET 0 LIMIT 15;`);
    // SELECT * FROM users INNER JOIN video ON (users.username = video.created_by);
    // SELECT * FROM users id, video id WHERE users.username = video.created_by;

  }
  else{
    pageCurrnt*=15
    return connection.query(`
    select * from users
    join video on users.username = video.created_by OFFSET ${pageCurrnt} LIMIT 15;`);
  }

};

module.exports = getVideo;