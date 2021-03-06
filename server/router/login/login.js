const express = require("express");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const serverValidation = require("./server-validation");
const emailExists = require("../../DB/query/email-exist");
require("env2")("./config.env");
const routerLogin = express.Router();
router.use(cookieParser());

routerLogin.post("/", async (req, res) => {
  const { username, email, password } = await serverValidation(req.body);
  const secretBin = process.env.SECRET;
  if (email) {
    const emails = await emailExists(email);
    const rowsCount = emails.rowCount;
    if (rowsCount > 0) {
      const dbPassword = emails.rows[0].password;
      const payLoad = {
        username: username,
        email: email,
        logged_in: true,
        role: "user",
      };
      if (bcrypt.compareSync(password, dbPassword)) {
        const token = jwt.sign(payLoad, secretBin);
        res.cookie("token", token, {
          maxAge: 9999,
          httpOnly: true,
          secure: true,
        });
        res.set(token);
        res.redirect(`/`);
      } else {
        res.json({ msg: "incorrect Password" });
      }
    } else {
      res.json({ msg: "you have to sign up first" });
    }
  } else {
    res.json({ msg: "you are not allowd anymore!" });
  }
});


module.exports = routerLogin;
