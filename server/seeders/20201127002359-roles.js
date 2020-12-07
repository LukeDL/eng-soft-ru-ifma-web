'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const created = new Date()
    const updated = new Date()

    return queryInterface.bulkInsert('Roles', [
      {
        type: 'Administrator',
        createdAt: created,
        updatedAt: updated
      },
      {
        type: 'Nutritionist',
        createdAt: created,
        updatedAt: updated
      },
      {
        type: 'Manager',
        createdAt: created,
        updatedAt: updated
      },
      {
        type: 'Student',
        createdAt: created,
        updatedAt: updated
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Roles', null, {})
  }
}
