'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.addColumn('Users', 'role', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
        as: 'role'
      },
      onDelete: 'CASCADE',
      after: 'password'
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.removeColumn('Users', 'role')
  }
}
