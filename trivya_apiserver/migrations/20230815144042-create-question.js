'use strict';
/** @type {import('sequelize-cli').Migration} */

const DataTypes = require('sequelize/lib/data-types');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      uuid: {
        // allowNull: false,
        // primaryKey: true,
        // type: DataTypes.INTEGER,
        type: DataTypes.UUID,
        // TODO: change thissssss - i need uuid to generated
        defaultValue: uuidv4(),
      },
      content: {
        type: DataTypes.TEXT
      },
      contentMt: {
        type: DataTypes.TEXT
      },
      category: {
        type: DataTypes.STRING
      },
      fact: {
        type: DataTypes.TEXT
      },
      factMt: {
        type: DataTypes.TEXT
      },
      difficulty: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};