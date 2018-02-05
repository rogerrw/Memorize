/**
 * BibleAbbreviations.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 */

module.exports = {

  attributes: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    abbreviation: {
      type: Sequelize.STRING,
      allowNull: false
    },
    bookID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    preferred: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  },

  options: {
    tableName: 'abbreviations',
    classMethods: {},
    instanceMethods: {},
    hooks: {},
    scopes: {},
    schema: 'bible',
    timestamps: false,
  }
};
