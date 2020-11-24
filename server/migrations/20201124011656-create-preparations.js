'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Preparations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      preparationName: {
        type: Sequelize.STRING
      },
      nutritionist: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Nutritionist',
          key: 'id',
          as: 'nutritionist'
        }
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
    return queryInterface.dropTable('preparations')
  }
}
