/**
 * Bible_verse.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    book: {
      type: Sequelize.STRING,
      allowNull: false
    },
    chapter: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    verse: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    verseText: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  options: {
    tableName: 'kjv',
    classMethods: {},
    instanceMethods: {},
    hooks: {},
    scopes: {},
  }
};
