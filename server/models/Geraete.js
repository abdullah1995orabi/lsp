const mongoose = require("mongoose");
const geraeteSchema = new mongoose.Schema({
    geraetname:{
        type: String,
        required: true,
        lowercase: true,
      },
});