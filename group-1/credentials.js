const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    email: {
    type: String,
    validate: {
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
    required: true,
  },
},
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);  
        },
    },
  },
},
);

module.exports = mongoose.model('Credentials', patientSchema);