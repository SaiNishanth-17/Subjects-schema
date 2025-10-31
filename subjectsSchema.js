const mongoose = require("mongoose");
const subjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  exams:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Exams"
  }
});
module.exports = mongoose.model("Subject", subjectSchema);