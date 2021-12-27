const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const User = require("./models/User");
require("dotenv").config({ path: "./config/keys.env" });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("mongoose").connect(process.env.MONGODB_URL, {}, (err, res) => {
  if (err) {
    console.log("database connection error", err);
  } else {
    console.log("Connected to DB");
  }
});

app.get("/", function (req, res) {
  console.log("here!");
});

app.post("/api/anmelden", (req, res) => {
  const { email, password } = req.body.data;
  User.findOne({ email: email }).then(async (user) => {
    if (user) {
      if(user.isValidPassword(password)){
        res.status(200).json({ message: "willkommen "+user.vorname+"!", loginData: user.generateLoginToken() });
      }else{
        res.status(404).json({ message: "password wrong!" });
      }
    } else {
      res.status(404).json({ message: "user not found" });    }
  });
});

app.post("/api/register", (req, res) => {
  const { nachname, vorname, email, password, accountType, plz, strnr } =
    req.body;

  User.findOne({ email: email }).then(async (user) => {
    if (user) {
      res.status(404).json({ message: "user has been already registered" });
    } else {
      try {
        const newuser = new User({
          nachname: nachname,
          vorname: vorname,
          email: email,
          accountType: accountType,
          plz: plz,
          strnr: strnr,
        });
        newuser.encryptPassword(password)

         await newuser.save().then(data => {

           res.status(200).json({ message: "willkommen!", loginData: data.generateLoginToken() });
         });
      } catch (err) {
        console.log(err);
        res.status(404).json({ message: "error" });
      }
    }
  });
});
app.listen(5000, function () {
  console.log("app listen on port 5000");
});
