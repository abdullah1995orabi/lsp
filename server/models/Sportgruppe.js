const mongoose = require("mongoose");
const sportgruppeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  teilnaemern: {
    type: Array,
    required: false,
  },
});
