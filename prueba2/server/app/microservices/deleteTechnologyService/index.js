const express = require('express');
const Technology = require('../createTechnologyService/model');
const router = express.Router();

// Eliminar una tecnología
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTechnology = await Technology.findByIdAndDelete(id);
    if (!deletedTechnology) return res.status(404).json({ message: 'Tecnología no encontrada' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
