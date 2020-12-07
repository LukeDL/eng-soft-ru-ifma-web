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

    return queryInterface.bulkInsert('Ingredients', [
      {
        ingredientName: 'Arroz Tipo 1',
        quantity: 1000,
        quantityType: 'gramas',
        createdAt: created,
        updatedAt: updated
      },
      {
        ingredientName: 'Sal',
        quantity: 1000,
        quantityType: 'gramas',
        createdAt: created,
        updatedAt: updated
      },
      {
        ingredientName: 'Cebola Picada',
        quantity: 1000,
        quantityType: 'gramas',
        createdAt: created,
        updatedAt: updated
      },
      {
        ingredientName: 'Manteiga',
        quantity: 2000,
        quantityType: 'gramas',
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
    return queryInterface.bulkDelete('Ingredients', null, {})
  }
}
