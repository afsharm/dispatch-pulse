const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Parcel = sequelize.define('Parcel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Parcel;