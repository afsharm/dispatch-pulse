const Joi = require('joi');

class CreateParcelDTO {
  constructor(name) {
    this.name = name;
    this.validate();
  }

  validate() {
    const schema = Joi.object({
      name: Joi.string().max(255).required(),
    });

    const { error } = schema.validate({ name: this.name });

    if (error) {
      throw new Error(`Validation error: ${error.message}`);
    }
  }
}

module.exports = CreateParcelDTO;
