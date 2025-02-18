/* 

TODO: Currently, this table is created with a password column,
      the ideal would be an another table to store the password hash.
      Sadly due to time constraints, we could not implement this right now

*/

'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }, // TODO: Delete this
      /* ,
      role: {
        type: Sequelize.STRING,
        allowNull: false
          references: {
          model: 'Roles',
          key: 'id',
          as: 'role'
        },
        onDelete: 'CASCADE' 
      } */
      birthday: {
        type: Sequelize.DATEONLY,
        allowNull: true
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
    return queryInterface.dropTable('Users')
  }
}
