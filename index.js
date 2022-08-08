const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lknx0gy.mongodb.net/?retryWrites=true&w=majority`);
const HeroModel = require("./model/characters");



const port = 8006;

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

app.listen(port, () => {
  console.log("listen my port", port);
});
