const mongoose = require("mongoose");
const sportgruppeSchema = new mongoose.Schema({
    sportgruppname:{
        type: String,
        required: true,
        lowercase: true,
      },
});