const mongoose = require("mongoose");
const { Schema } = mongoose;

const NewsSchema = new Schema({
    "title": String,
    "description": String,
    "url": String,
    "image": String,
    "published": String
});

const Model = mongoose.model("news", NewsSchema, "news");

module.exports = Model;