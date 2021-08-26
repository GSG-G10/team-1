const addVideoSchema = require('../../router/addVideo/VideoSchema');
const connection = require('../config/connections');

const addVideoQuery = (data) => {
    const dataArray = [data.username, data.urlVideo, data.discriptionVideo, data.title, data.urlImg, data.category, data.At];
    return connection.query(
        'INSERT INTO customers (created_by, url, description, title, img, tag, created_at) VALUES ($1 ,$2 ,$3 ,$4 ,$5 ,$6, $7);',
        dataArray,
    );
};

module.exports = addVideoQuery;