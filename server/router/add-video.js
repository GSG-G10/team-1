const express = require("express");
const path = require("path");

const routerAddVideo = express.Router();
const addVideoSchema = require("./addVideo/VideoSchema");
const addVideoQuery = require("../DB/query/add-video-query");

routerAddVideo.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/home/index.html"));
});

const promiseSchema = (bodyValue) =>
  new Promise((resolve, reject) => {
    const { error, value } = addVideoSchema.validate(bodyValue);
    if (error) reject(error);
    else resolve(value);
  });
  
routerAddVideo.post("/", (req, res, next) => {
  promiseSchema(req.body)
    .then((value) =>
      addVideoQuery(value)
        .then((result) => res.redirect("/"))
        .catch((err) => next(err))
    )
    .catch((error) => next(error));
});

module.exports = routerAddVideo;
