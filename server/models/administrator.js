'use strict'
module.exports = (sequelize, DataTypes) => {
  const Administrator = sequelize.define(
    'Administrator',
    {
      registration: DataTypes.STRING
    },
    {}
  )
  Administrator.associate = function(models) {
    // associations can be defined here

    this.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }
  return Administrator
}
