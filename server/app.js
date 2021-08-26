const express = require("express");
const path = require("path");
const app = express();
const routerLand = require("./router/land");
const routerLogout = require("./router/logout");
const routerRegister = require("./router/register/register");
const routerLogin = require("./router/login/login");
const routerAddVideo = require("./router/addVideo/add-video");
const routerProfile = require("./router/profile");
const routerWatch = require("./router/watch/watch");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 3000);
app.use(
  express.static(path.join(__dirname, "..", "public"), { maxAge: "30d" })
);

app.use("/", routerLand);
app.use("/register", routerRegister);
app.use("/logout", routerLogout);
app.use("/login", routerLogin);
app.use("/logout", routerLogout);
app.use("/profile", routerProfile);
app.use("/add-video", routerAddVideo);
app.use("/watch", routerWatch);

module.exports = app;
