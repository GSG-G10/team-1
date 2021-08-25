const connection = require('../config/connections');

const emailExists = (email) => {
    const sql = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [email]
    };

    // let success = false;

    // connection.query(sql)
        // .then(result => success = result.rowCount > 0)
        // .catch(e => console.log(e));

    return connection.query(sql);
}

module.exports= emailExists;