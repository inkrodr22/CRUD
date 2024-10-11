const express = require('express');
const Startup = require('./model');
const router = express.Router();

router.post('/create', async (req, res) => {
  const { name, foundedDate, location, category, investmentReceived, description, employees } = req.body;

  try {
    const existingStartup = await Startup.findOne({ name });
    if (existingStartup) {
      return res.status(400).json({ message: 'Ya existe una startup con este nombre. Por favor, elige otro.' });
    }

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
    res.status(201).json({ message: 'Startup creada exitosamente.', startup: savedStartup });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Error de validación: ' + error.message });
    }
    res.status(500).json({ message: 'Hubo un problema al crear la startup. Inténtalo de nuevo más tarde.' });
  }
});

module.exports = router;
