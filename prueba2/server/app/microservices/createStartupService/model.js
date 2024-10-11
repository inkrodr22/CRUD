const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  foundedDate: { type: Date, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  investmentReceived: { type: Number, required: true },
  description: { type: String, required: true },
  employees: { type: Number, required: true }
});

module.exports = mongoose.model('Startup', startupSchema);
