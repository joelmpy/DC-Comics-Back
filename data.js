const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/Dc-comics");


const HeroModel = require('./model/characters')
HeroModel.insertMany([
    {
      slug: "batman",
      name: "Batman",
      description: "bonjour c batman",
      intro: "je suis batman",
      power: ["Batmobile", "Karaté"],
      color: "black",
      image: [
        "https://th.bing.com/th/id/OIP.T80ic49N3wSh8LPHix8IiQHaEK?pid=ImgDet&rs=1",
        "https://avatarfiles.alphacoders.com/191/191710.jpg",
      ],
    },
    {
      slug: "superman",
      name: "superman",
      description: "bonjour c superman",
      intro: "je suis superman",
      power: ["Les yeux laser", "Voler"],
      color: "bleu",
      image: [
        "https://th.bing.com/th/id/OIP.T80ic49N3wSh8LPHix8IiQHaEK?pid=ImgDet&rs=1",
        "https://avatarfiles.alphacoders.com/191/191710.jpg",
      ],
    },
    {
      slug: "catwoman",
      name: "catwoman",
      description: "bonjour c catwoman",
      intro: "je suis catwoman",
      power: ["griffer", "voler"],
      color: "black",
      image: [
        "https://th.bing.com/th/id/OIP.T80ic49N3wSh8LPHix8IiQHaEK?pid=ImgDet&rs=1",
        "https://avatarfiles.alphacoders.com/191/191710.jpg",
      ],
    },
  ]);