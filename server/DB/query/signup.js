const connection = require('../config/connections');


const signup = (username, password, email) => {
    const sql = {
        text : 'INSERT INTO users (username, password, email) RETURNING *',
        values: [username, password, email],
    };

    return connection.query(sql);
}

module.exports= signup;