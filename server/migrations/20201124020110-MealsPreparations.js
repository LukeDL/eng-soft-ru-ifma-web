'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('MealsPreparations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mealId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Meals',
          key: 'id',
          as: 'mealId'
        },
        onDelete: 'CASCADE'
      },
      preparationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Preparations',
          key: 'id',
          as: 'preparationId'
        },
        onDelete: 'CASCADE'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable('MealsPreparations')
  }
}
