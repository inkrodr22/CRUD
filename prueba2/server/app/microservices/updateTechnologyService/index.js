const express = require('express');
const Technology = require('../createTechnologyService/model');
const router = express.Router();

// Actualizar una tecnología
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedTechnology = await Technology.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedTechnology) return res.status(404).json({ message: 'Tecnología no encontrada' });
    res.status(200).json(updatedTechnology);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
