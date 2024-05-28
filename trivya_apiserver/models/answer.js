'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Question = require('./question');


const Answer = sequelize.define('answer',
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

Question.hasMany(Answer);
Answer.belongsTo(Question);

module.exports = Answer;
