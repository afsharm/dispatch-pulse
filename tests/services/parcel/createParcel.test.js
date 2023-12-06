const Parcel = require('../../../models/Parcel');
const createParcel = require('../../../services/parcel/createParcel');

// Mocking the database functionality
jest.mock('../../../models/Parcel', () => ({
  create: jest.fn(),
}));

describe('createParcel', () => {
  it('should create a parcel successfully', async () => {
    // Arrange
    const parcelData = {
      name: 'Test Parcel',
    };
    Parcel.create.mockResolvedValue({ name: 'Test Parcel' });

    // Act
    const result = await createParcel(parcelData);

    // Assert
    expect(Parcel.create).toHaveBeenCalledWith({ name: 'Test Parcel' });
    expect(result).toEqual({ name: 'Test Parcel' });
  });

  it('should throw an error if failed to create the parcel', async () => {
    // Arrange
    const parcelData = {
      name: 'Test Parcel',
    };
    const errorMessage = 'Failed to create the parcel';
    Parcel.create.mockRejectedValue(new Error(errorMessage));

    // Act & Assert
    await expect(createParcel(parcelData)).rejects.toThrow(errorMessage);
  });
});
