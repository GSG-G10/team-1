const app = require("./app.js");

app.listen(app.get("port"), () => {
  console.log(`App running http://localhost:${app.get("port")}`);
});

