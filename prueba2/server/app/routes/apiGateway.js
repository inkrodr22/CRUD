const express = require('express');
const router = express.Router();
const createStartupService = require('../microservices/createStartupService');
const readStartupService = require('../microservices/readStartupService');
const updateStartupService = require('../microservices/updateStartupService');
const deleteStartupService = require('../microservices/deleteStartupService');
const createTechnologyService = require('../microservices/createTechnologyService');
const readTechnologyService = require('../microservices/readTechnologyService');
const updateTechnologyService = require('../microservices/updateTechnologyService');
const deleteTechnologyService = require('../microservices/deleteTechnologyService');

// Prefijos para las rutas
router.use('/startups', createStartupService);
router.use('/startups', readStartupService);
router.use('/startups', updateStartupService);
router.use('/startups', deleteStartupService);
router.use('/technologies', createTechnologyService);
router.use('/technologies', readTechnologyService);
router.use('/technologies', updateTechnologyService);
router.use('/technologies', deleteTechnologyService);

module.exports = router;
