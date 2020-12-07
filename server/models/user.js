'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.INTEGER,
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

    this.belongsToMany(models.Meals, {
      through: 'StudentMeals'
    })
  }
  return User
}
