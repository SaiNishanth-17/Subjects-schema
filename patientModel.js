const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
    gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  credentials: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Credentials',
  },
},
 {timestamps: true }
);

module.exports = mongoose.model('Patient', patientSchema);
