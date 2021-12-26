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
  const {email, password, accountType} = req.body
  // if (req.body.accountType === "trainer") {
  //   res.status(200).json({ message: "was möchten sie anbieten ?" });
  // }
  // if (req.body.accountType === "auszubildender") {
  //   res.status(200).json({ message: "es gibt neue Kursen" });
  // }
});

app.post("/api/register", async (req, res) => {
  const {nachname, vorname, email, password, accountType,plz ,strnr} = req.body
  const newuser = new User ({
    nachname:nachname,
    vorname:vorname,
    email:email,
    password:password,
    accountType:accountType,
    plz:plz,
    strnr:strnr,
  })
try{
  const result = await newuser.save()
  res.status(200).json(result)
}catch {
  res.status(404).json(err)
}
//test
   /*const newUser = new User({
     nachname: "Orabi",
     vorname: "Abdullah",
     email: "newemail2@gmail.com",
     password: "657567",
     accountType: "auszubildender"
   })
   
   */
  //test
  // newUser.save().then(data => {
  //   console.log("new User has been created", data)
  // }).catch(err => {
  //   console.log("err while create new User", err)
  // })
});
app.listen(5000, function () {
  console.log("app listen on port 5000");
});
