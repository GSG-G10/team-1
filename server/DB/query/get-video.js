const connection = require("../config/connections.js");

const getVideo = (pageCurrnt) => {
  if(pageCurrnt == 0){
    return connection.query(`
    select * from users
    join video on users.username = video.created_by OFFSET 0 LIMIT 15;`);

  }
  else{
    pageCurrnt*=15
    return connection.query(`
    select * from users
    join video on users.username = video.created_by OFFSET ${pageCurrnt} LIMIT 15;`);
  }

};

module.exports = getVideo;