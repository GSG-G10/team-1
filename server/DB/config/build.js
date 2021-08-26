const {readFileSync}= require('fs');
const {join} = require('path');

const connection = require('./connections');

let runBuild = () => {
    let sql = readFileSync(join(__dirname, 'build.sql')).toString();

    //if we have multiple environments we will add it just in test env case!
    sql += readFileSync(join(__dirname, 'build.sql')).toString();

    connection
    .query(sql)
    .then(() => console.log('build created successfully!'))
    .catch((e) => console.error('failed to build', e.stack));

}

runBuild();

module.exports= runBuild;