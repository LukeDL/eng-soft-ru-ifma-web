'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentsMeals', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
          as: 'studentId'
        },
        onCascade: 'DELETE'
      },
      mealId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Meals',
          key: 'id',
          as: 'mealId'
        },
        onCascade: 'DELETE'
      },
      mealDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable('StudentsMeals')
  }
}
