/**
 * BibleKJV.js
 *
 * @description :: The Bible in the King James' Version.
 */

module.exports = {
  attributes: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
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
    schema: 'bible',
    timestamps: false,
  }
};
