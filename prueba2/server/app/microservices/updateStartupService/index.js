const express = require('express');
const Startup = require('../createStartupService/model');
const router = express.Router();

// Actualizar una startup
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedStartup = await Startup.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedStartup) return res.status(404).json({ message: 'Startup no encontrada' });
    res.status(200).json(updatedStartup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
