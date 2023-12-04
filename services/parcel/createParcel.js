const Parcel = require('../../models/Parcel');
const CreateParcelDTO = require('../../commands/CreateParcelDTO');

module.exports = async (parcelData) => {
    try {
        const { name } = new CreateParcelDTO(parcelData.name);
        const parcel = await Parcel.create({ name });
        return parcel;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to create the parcel');
    }
}