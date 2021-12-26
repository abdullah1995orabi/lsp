const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  vornamr:{
    type: String,
    required: true,
    lowercase: true,
  },
  nachname:{
    type: String,
    required: true,
    lowercase: true,
  },
  plz:{
    type: String,
    required: true,
    lowercase: true,
  },
  strnr:{
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema)