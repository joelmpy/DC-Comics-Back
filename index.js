const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect(`${process.env.DATABASE_URL}`);
const HeroModel = require("./model/characters");



const port = 5000;

app.get("/hero", (req, res, next) => {
  HeroModel.find({})
    .exec()
    .then(function (reponseHero) {
      if (reponseHero === null) {
        res.send("Error is not valid");
      } else res.json(reponseHero);
    });
});

app.get("/hero/:slug", (req, res, next) => {
  let slug = req.params.slug.toLowerCase();
  HeroModel.findOne({
    slug: slug,
  })
    .exec()
    .then(function (reponseName) {
      if (reponseName === null) {
        res.status(404).send("Error is not valid");
      } else res.status(200).json(reponseName);
    });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("listen my port", port);
});
