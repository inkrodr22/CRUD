const express = require('express');
const Technology = require('./model');
const router = express.Router();

// Crear una nueva tecnología
router.post('/create', async (req, res) => {
  const { name, sector, description, adoptionStatus, currentUsage, implementationCost, maturityLevel } = req.body;

  try {
    const newTechnology = new Technology({
      name,
      sector,
      description,
      adoptionStatus,
      currentUsage,
      implementationCost,
      maturityLevel
    });

    const savedTechnology = await newTechnology.save();
    res.status(201).json(savedTechnology);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
