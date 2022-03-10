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

router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  try {
    const page = await Page.create({
      title: res.body.title,
      content: res.body.content,
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
});

module.exports = router;
