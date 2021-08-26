const express = require("express");
const path = require("path");
const routerWatch = express.Router();
const getWatch = require("../../DB/query/get-watch");
const bodyParser = require("body-parser");
routerWatch.use(bodyParser.json());

routerWatch.get("/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/watch/index.html"));
});


routerWatch.get("/data/:id", (req, res) => {
  console.log(req.params.id);
  getWatch(req.params.id)
    .then((data) => {
      console.log(data.rows);
      res.json(data.rows);
    })
    .catch(console.log);
});

module.exports = routerWatch;
