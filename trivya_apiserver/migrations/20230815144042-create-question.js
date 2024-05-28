'use strict';
/** @type {import('sequelize-cli').Migration} */

const DataTypes = require('sequelize/lib/data-types');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      uuid: {
        // allowNull: false,
        // primaryKey: true,
        unique: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
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
        // TODO: change
        type: DataTypes.STRING
        // type: DataTypes.ENUM,
        // values: ['Easy', 'Medium', 'Hard', 'Extreme'],
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};