const { pool, Pool } = require("pg");
require("env2")("./config.env");

const DB_URL = process.env.DB_URL;
if (!DB_URL) {
  console.log("No Databse URL!!!");
  return;
}
const params = new URL(DB_URL);
const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: params.username,
  password: params.password,
  ssl: params.hostname !== "localhost",
};

module.exports = new Pool(options);
