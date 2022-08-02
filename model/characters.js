const mongoose = require('mongoose')

const HeroSchema = mongoose.Schema({
    slug : String,
    name : String,
    description : String,
    intro : String,
    power : [String],
    color : String,
    image : [String],
})

const heroModel = mongoose.model('hero', HeroSchema)

module.exports = heroModel

