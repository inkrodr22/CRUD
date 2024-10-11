const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
  name: { type: String, required: true },
  sector: { type: String, required: true },
  description: { type: String, required: true },
  adoptionStatus: { type: String, required: true }
});

module.exports = mongoose.model('Technology', technologySchema);
