const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const path = require("path");
const app = express();
const PORT = 5432;

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  console.log(".get working");
  res.send("<h1>Hello world!</h1>");
});

const seed = async () => {

  await db.sync({force: true});

  // await Page.sync();
  // await User.sync();

  app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));

}

seed();




