'use strict'
module.exports = (sequelize, DataTypes) => {
  const Nutritionist = sequelize.define(
    'Nutritionist',
    {
      registration: DataTypes.STRING
    },
    {}
  )
  Nutritionist.associate = function(models) {
    // associations can be defined here

    this.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })

    this.hasMany(models.Meals, {
      foreignKey: 'id'
    })
  }
  return Nutritionist
}
