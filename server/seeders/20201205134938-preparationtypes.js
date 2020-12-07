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

    return queryInterface.bulkInsert('PreparationTypes', [
      {
        preparationType: 'Entrada',
        createdAt: created,
        updatedAt: updated
      },
      {
        preparationType: 'Guarnição',
        createdAt: created,
        updatedAt: updated
      },
      {
        preparationType: 'Acompanhamento',
        createdAt: created,
        updatedAt: updated
      },
      {
        preparationType: 'Prato Principal',
        createdAt: created,
        updatedAt: updated
      },
      {
        preparationType: 'Sobremesa',
        createdAt: created,
        updatedAt: updated
      },
      {
        preparationType: 'Suco',
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

    return queryInterface.bulkDelete('PreparationTypes', null, {})
  }
}
