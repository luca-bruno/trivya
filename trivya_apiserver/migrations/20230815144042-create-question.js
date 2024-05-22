'use strict';
/** @type {import('sequelize-cli').Migration} */

const DataTypes = require('sequelize/lib/data-types');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
      },
      content: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      fact: {
        type: Sequelize.STRING
      },
      difficulty: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};