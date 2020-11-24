'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('PreparationsIngredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      },
      ingredientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        refereces: {
          model: 'Ingredients',
          key: 'id',
          as: 'ingredientId'
        },
        onDelete: 'CASCADE'
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      quantityType: {
        allowNull: false,
        type: Sequelize.STRING
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
  }
}
