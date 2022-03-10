const express = require("express");
const morgan = require("morgan");
const { db } = require("./models");
const path = require("path");
// const routes = require("./routes");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

const app = express();

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

app.use("/wiki", wikiRouter);
app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  console.log(".get working");
  res.send("<h1>Hello world!</h1>");
});

const seed = async () => {
  await db.sync({ force: true });
};

seed();

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));
