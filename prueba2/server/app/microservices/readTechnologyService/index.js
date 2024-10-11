const express = require('express');
const Technology = require('../createTechnologyService/model');
const router = express.Router();

// Obtener la lista de tecnologías
router.get('/read', async (req, res) => {
  try {
    const technologies = await Technology.find();
    res.status(200).json(technologies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener tecnología por ID
router.get('/read/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const technology = await Technology.findById(id);
    if (!technology) {
      return res.status(404).json({ message: 'Tecnología no encontrada' });
    }
    res.status(200).json(technology);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
