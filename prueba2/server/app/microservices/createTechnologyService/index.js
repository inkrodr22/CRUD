const express = require('express');
const Technology = require('./model');
const router = express.Router();

router.post('/create', async (req, res) => {
  const { name, sector, createdDate, description, adoptionStatus, currentUsage, implementationCost, maturityLevel } = req.body;

  try {
    const existingTechnology = await Technology.findOne({ name });
    if (existingTechnology) {
      return res.status(400).json({ message: 'Ya existe una tecnología con este nombre. Por favor, elige otro.' });
    }

    const newTechnology = new Technology({
      name,
      sector,
      createdDate,
      description,
      adoptionStatus,
      currentUsage,
      implementationCost,
      maturityLevel
    });

    const savedTechnology = await newTechnology.save();
    res.status(201).json({ message: 'Tecnología creada exitosamente.', technology: savedTechnology });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Error de validación: ' + error.message });
    }
    res.status(500).json({ message: 'Hubo un problema al crear la tecnología. Inténtalo de nuevo más tarde.' });
  }
});

module.exports = router;
