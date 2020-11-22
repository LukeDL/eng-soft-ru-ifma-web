'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('MealIngredients', {
      mealId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Meals',
          key: 'id',
          as: 'mealId'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Ingredients',
          key: 'id',
          as: 'ingredientId'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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

    return queryInterface.dropTable('IngredientMeals')
  }
}
