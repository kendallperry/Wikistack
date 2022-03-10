const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
// const path = require("path");

router.get("/", function (req, res) {
  res.send("test :)");
});

router.get("/add", function (req, res) {
  res.send(addPage());
});

router.post("/", function (req, res) {
  res.send("got to POST /wiki/");
});

module.exports = router;
