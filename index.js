const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Dc-comics");
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
  let slug = req.params.slug;
  HeroModel.findOne({
    slug: slug,
  })
    .exec()
    .then(function (reponseName) {
      if (reponseName === null) {
        res.send("Error is not valid");
      } else res.json(reponseName);
    });
});

app.listen(port, () => {
  console.log("listen my port", port);
});
