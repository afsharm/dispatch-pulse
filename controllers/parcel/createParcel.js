const createParcel = require('../../services/parcel/createParcel');

module.exports = async (req, res) => {
    try {
        const parcel = await createParcel(req.body);
        res.status(201).json(parcel);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
