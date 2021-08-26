const express = require("express");
const path = require("path");
const routerLogout = express.Router();

routerLogout.get("/", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});


module.exports = routerLogout;
