const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs")
const userSchema = new mongoose.Schema({
  vorname:{
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

userSchema.methods.encryptPassword = function(password){
this.password = bcryptjs.hashSync(password, 8)
}
userSchema.methods.isValidPassword = function (password){
  return bcryptjs.compareSync(password, this.password)
}




module.exports = mongoose.model("User", userSchema)