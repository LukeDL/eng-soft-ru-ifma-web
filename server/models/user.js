'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: DataTypes.INT,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.INT,
      birthday: DataTypes.DATEONLY
    },
    {}
  )
  User.associate = function(models) {
    // associations can be defined here
    this.hasOne(models.Role, {
      foreignKey: 'role'
    })

    this.hasMany(models.Meals, {
      foreignKey: 'id'
    })

    this.hasMany(models.Preparations, {
      foreignKey: 'id'
    })
  }
  return User
}
