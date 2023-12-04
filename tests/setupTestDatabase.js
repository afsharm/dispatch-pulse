const sequelizeDatabase = require('../config/database');
const config = require('../config/config.test.json');
const { Sequelize } = require('sequelize');

const setupSequelize = new Sequelize({
  host: config.host,
  dialect: config.dialect,
  username: config.username,
  password: config.password,
});

async function setupTestDatabase() {
  try {
    // Create the database if it doesn't exist
    await setupSequelize.query('CREATE DATABASE IF NOT EXISTS dispatchpulse_test;');

    // Use the test database
    await setupSequelize.query('USE dispatchpulse_test;');

    // Create the tables if they don't exist
    await sequelizeDatabase.sync({ force: true }); // This will drop all existing tables and create new ones

    console.log('Test database and tables created successfully.');
  } catch (error) {
    console.error('Error setting up test database:', error);
  }
}

module.exports = { setupTestDatabase };