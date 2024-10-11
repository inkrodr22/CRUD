// routes/startupRoutes.js
const express = require('express');
const router = express.Router();
const Startup = require('../createStartupService/model');

// Obtener todas las startups
router.get('/read', async (req, res) => {
    try {
        const startups = await Startup.find(); // Obtiene todas las startups
        res.status(200).json(startups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener startup por ID
router.get('/read/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const startup = await Startup.findById(id);
        if (!startup) {
            return res.status(404).json({ message: 'Startup no encontrada' });
        }
        res.status(200).json(startup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
