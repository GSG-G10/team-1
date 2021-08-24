const {readFileSync}= requie('fs');
const {join} = require('path');

const connection = require('./connections');

let runBuild = () => {
    let sql = readFileSync(join(__dirname, 'build.sql')).toString();

    //if we have multiple environments we will add it just in test env case!
    sql += readFileSync(join(__dirname, 'data.sql')).toString();

    return connection.query(sql);
}

module.exports= runBuild;