const mongoose = require("mongoose");
const tarifSchema = new mongoose.Schema({
tarifname:{
    type: String,
    required: true,
    lowercase: true,
},
preis:{
    type: double,
    required: true,
   
},
discount:{
    type: int,
    required: true,
    
},
});