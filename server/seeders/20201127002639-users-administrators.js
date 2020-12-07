'use strict'

const bcrypt = require('bcrypt')
require('dotenv').config()

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

    const salt = bcrypt.genSaltSync(13)
    const hash = bcrypt.hashSync(process.env.ADMIN_PASSWORD, salt)

    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'admin',
          lastName: 'istrator',
          email: 'admin@all.com',
          password: hash,
          role: '1',
          createdAt: created,
          updatedAt: updated
        }
      ],
      {}
    )
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
