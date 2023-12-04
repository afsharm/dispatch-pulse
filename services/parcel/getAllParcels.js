const Parcel = require('../../models/Parcel');
const ParcelDTO = require('../../queries/ParcelDTO');


module.exports = async () => {
    try {
        const parcels = await Parcel.findAll();
        const parcelsDTO = parcels.map(({ id, name }) =>
            new ParcelDTO(id, name)
        );

        return parcelsDTO;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch parcels');
    }
}