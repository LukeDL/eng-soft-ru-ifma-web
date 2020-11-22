'use strict'
module.exports = (sequelize, DataTypes) => {
  const Meals = sequelize.define(
    'Meals',
    {
      mealName: DataTypes.STRING
    },
    {}
  )
  Meals.associate = function(models) {
    // associations can be defined here
    Meals.belongsTo(models.Nutritionist, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    })
    Meals.belongsToMany(models.Ingredients, {
      through: 'MealIngredients'
    })
  }
  return Meals
}
