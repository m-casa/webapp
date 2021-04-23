const mongoose = require("mongoose");
const { Schema } = mongoose;

const NewsSchema = new Schema({
    "newsType": String,
    "title": String,
    "description": String,
    "url": String,
    "img": String,
    "publishedAt": String,
    "createdOn": { default: new Date(), type: Date } //May need to change to Date type later?
});

const Model = mongoose.model("news", NewsSchema, "news");

module.exports = Model;