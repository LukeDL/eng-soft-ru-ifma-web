'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birthday: DataTypes.DATEONLY
    },
    {}
  )
  User.associate = function(models) {
    // associations can be defined here
    this.hasOne(models.Nutritionist, {
      foreignKey: 'id'
    })
  }
  return User
}
