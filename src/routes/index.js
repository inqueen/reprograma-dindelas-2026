const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Novo Dindelas 2026"
    , text: "Projeto para portfólio Full Stack Dev"
    , author: "Dani Beleze"
    , version: "1.1.0"
  });
});

module.exports = router;
