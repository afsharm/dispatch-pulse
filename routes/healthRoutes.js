const express = require('express');
const root = require('../controllers/health/root');

const router = express.Router();
router.get('/', root);

module.exports = router;