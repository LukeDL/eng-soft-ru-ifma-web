'use strict'
module.exports = (sequelize, DataTypes) => {
  const Meals = sequelize.define(
    'Meals',
    {
      mealName: DataTypes.STRING,
      user: DataTypes.INTEGER,
      date: DataTypes.DATEONLY
    },
    {}
  )
  Meals.associate = function(models) {
    // associations can be defined here
    Meals.belongsTo(models.User, {
      foreignKey: 'user',
      onDelete: 'CASCADE'
    })
    this.belongsToMany(models.Preparations, {
      through: 'PreparationsIngredients'
    })

    this.belongsToMany(models.User, {
      through: 'StudentsMeals'
    })
  }
  return Meals
}
