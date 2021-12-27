const mongoose = require("mongoose");
const sportartSchema = new mongoose.Schema({
    sportartname:{
        type: String,
        required: true,
        lowercase: true,
      },
});