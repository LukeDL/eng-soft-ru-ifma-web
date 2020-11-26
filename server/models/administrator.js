'use strict'
module.exports = (sequelize, DataTypes) => {
  const Administrators = sequelize.define(
    'Administrator',
    {
      registration: DataTypes.STRING
    },
    {}
  )
  Administrators.associate = function(models) {
    // associations can be defined here

    this.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }
  return Administrators
}
