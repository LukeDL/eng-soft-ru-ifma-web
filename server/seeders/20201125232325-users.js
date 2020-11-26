'use strict'

const bcrypt = require('bcrypt')

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

    let pass = ''
    const created = new Date()
    const updated = new Date()

    return bcrypt.hash('01123581321', 13).then(function(Hash) {
      console.log(Hash)
      pass = Hash

      queryInterface.bulkInsert(
        'Users',
        [
          {
            firstName: 'admin',
            lastName: 'istrator',
            email: 'admin@all.com',
            password: pass,
            createdAt: created,
            updatedAt: updated
          }
        ],
        {}
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Users', null, {})
  }
}
