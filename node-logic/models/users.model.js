const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    "name": String,
    "username": String,
    "email": String,
    "password": String
});

const Model = mongoose.model("user", UserSchema, "user");

module.exports = Model;