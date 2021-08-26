
const connection = require('../config/connections');

const addVideoQuery = (data) => {
  const dataArray = ["jomaa", data.urlVideo, data.descriptionVideo, data.title, data.urlImage, data.category];
  return connection.query(
    'INSERT INTO video (created_by, url, description, title, img, tag) VALUES ($1 ,$2 ,$3 ,$4 ,$5 ,$6);',
    dataArray,
  );
};

module.exports = addVideoQuery;
