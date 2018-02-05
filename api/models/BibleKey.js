/**
 * BibleKey.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 */

module.exports = {
  attributes: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    bookTitle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    testament: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },

  options: {
    tableName: 'key',
    classMethods: {},
    instanceMethods: {},
    hooks: {},
    scopes: {},
    schema: 'bible',
    timestamps: false,
  }
};
