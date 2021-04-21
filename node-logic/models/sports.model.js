const mongoose = require("mongoose");
const { Schema } = mongoose;

const SportsSchema = new Schema({
    "newsType" : String,
    "title" : String,
    "description" : String,
    "url" : String,
    "img" : String,
    "publishedAt" : String //May need to change to Date type later?
})

const Model = mongoose.model("news", SportsSchema, "news")

module.exports = Model;