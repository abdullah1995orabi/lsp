const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const userSchema = new mongoose.Schema({
  vorname: {
    type: String,
    required: true,
    lowercase: true,
  },
  nachname: {
    type: String,
    required: true,
    lowercase: true,
  },
  plz: {
    type: String,
    required: true,
    lowercase: true,
  },
  strnr: {
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
  kursen: {
    type: Object, 
    required: false
  }
});

userSchema.methods.encryptPassword = function (password) {
  this.password = bcryptjs.hashSync(password, 8);
};
userSchema.methods.isValidPassword = function (password) {
  return bcryptjs.compareSync(password, this.password);
};
userSchema.methods.generateLoginToken = function () {
  return {
    userId: this._id,
    accountType: this.accountType,
    token: jwt.sign({ email: this.email, userId: this._id }, "jwt_secret_key"), //38436786676bf873b73b86bv76b7vbvcn8c22n883456gg
  };
};
userSchema.methods.generateResetPasswordUrl = function () {
  let token = jwt.sign(
    { _id: this._id },
    "jwt_secret_key", 
    {expiresIn: "1h"}
    );

  return `http://localhost:3000/resetpasswordtoken/` + token;
};

module.exports = mongoose.model("User", userSchema);
