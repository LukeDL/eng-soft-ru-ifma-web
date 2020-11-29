'use strict'
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      type: DataTypes.STRING
    },
    {}
  )
  Role.associate = function(models) {
    // associations can be defined here

    this.belongsTo(models.User, {
      foreignKey: 'id'
    })
  }
  return Role
}
