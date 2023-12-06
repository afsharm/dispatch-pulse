const ParcelDTO = require('../../queries/ParcelDTO')

describe('DTO', () => {
  it('the constructor should assign th values correctly', () => {
    const actual = new ParcelDTO(123, 'abc');

    expect(actual.id).toEqual(123);
    expect(actual.name).toEqual('abc');
  })
})
