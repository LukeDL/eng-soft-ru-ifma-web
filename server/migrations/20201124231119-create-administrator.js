'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Administrators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          as: 'id'
        },
        onDelete: 'CASCADE'
      },
      registration: {
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
    return queryInterface.dropTable('Administrators')
  }
}
