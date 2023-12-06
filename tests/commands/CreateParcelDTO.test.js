const CreateParcelDTO = require('../../commands/CreateParcelDTO')

describe('CreateParcelDTO', () => {
  it('instanite with validation', () => {
    expect(() => new CreateParcelDTO()).toThrow('Validation error: "name" is required');
  })

  it('does not throw validation error', () => {
    expect(() => new CreateParcelDTO('abc')).not.toThrow();
  })
})
