const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema({
    "name" : String,
    "email" : String,
    "query" : String,
})

const Model = mongoose.model("contact", SportsSchema, "contact")

module.exports = Model;