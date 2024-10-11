const express = require('express');
const Startup = require('../createStartupService/model');
const router = express.Router();

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStartup = await Startup.findByIdAndDelete(id);
    if (!deletedStartup) return res.status(404).json({ message: 'Startup no encontrada' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
