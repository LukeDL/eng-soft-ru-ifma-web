'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Meals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mealName: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      nutritionistId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Nutritionists',
          key: 'id',
          as: 'nutritionistId'
        }
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY
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
    return queryInterface.dropTable('Meals')
  }
}
