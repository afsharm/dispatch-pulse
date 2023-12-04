const getAllParcels = require('../../services/parcel/getAllParcels');

module.exports = async (req, res, next) => {
    try {
        const parcels = await getAllParcels();

        res.json(parcels);
    } catch (error) {
        next(error);
    }
}
