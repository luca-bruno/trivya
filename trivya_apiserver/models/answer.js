'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

export const Answer = sequelize.define(
  'Answer',
  {
    // Model attributes are defined here
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    contentMt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    // Other model options go here
  },
);

Answer.associate = (model) => {
  Answer.belongsTo(model.Question, {
    foreignKey: 'question_uuid',
    as: 'question',
  })
};

  // Answer.belongsTo(Question, {
  //   foreignKey: 'question_uuid',
  // })
// );