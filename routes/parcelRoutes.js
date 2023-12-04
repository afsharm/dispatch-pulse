const express = require('express');
const createParcel = require('../controllers/parcel/createParcel');
const getAllParcels = require('../controllers/parcel/getAllParcels');

const router = express.Router();
router.post('/', createParcel);
router.get('/', getAllParcels);

module.exports = router;