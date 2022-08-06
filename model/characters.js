const mongoose = require('mongoose')

const HeroSchema = mongoose.Schema({
    slug : String,
    name : String,
    fullName : String,
    description : String,
    intro : String,
    power : [String],
    color : String,
    image : String,
    poster_path : String,
    poster_power : String,
})

const heroModel = mongoose.model('hero', HeroSchema)

module.exports = heroModel

