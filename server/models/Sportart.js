const mongoose = require("mongoose");
const sportartSchema = new mongoose.Schema({
  sportartname: {
    type: String,
    required: true,
    lowercase: true,
  },
  beschreibung: {
    type: String,
    required: true,
    lowercase: true,
  },
  anfangsdatum: {
    type: String,
    required: true,
    lowercase: true,
  },
  enddatum: {
    type: String,
    required: true,
    lowercase: true,
  },
  
  geraete: {
    type: Object,
    required: false,
    name: {
      type: String,
      required: false,
    },
    images: {
      type: Array,
      required: false
    }
  },
});
