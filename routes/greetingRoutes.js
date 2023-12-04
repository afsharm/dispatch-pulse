const express = require('express');
const hello = require('../controllers/greeting/hello');

const router = express.Router();
router.get('/hello', hello);

module.exports = router;