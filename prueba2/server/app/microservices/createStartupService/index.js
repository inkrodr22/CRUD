const express = require('express');
const Startup = require('./model');
const router = express.Router();

// Crear una nueva startup
router.post('/create', async (req, res) => {
  const { name, foundedDate, location, category, investmentReceived, description, employees } = req.body;

  try {
    const newStartup = new Startup({
      name,
      foundedDate,
      location,
      category,
      investmentReceived,
      description,
      employees
    });

    const savedStartup = await newStartup.save();
    res.status(201).json(savedStartup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
