'use strict'
module.exports = (sequelize, DataTypes) => {
  const Ingredients = sequelize.define(
    'Ingredients',
    {
      ingredientName: DataTypes.STRING,
      quantity: DataTypes.INTEGER
    },
    {}
  )
  Ingredients.associate = function(models) {
    // associations can be defined here

    Ingredients.belongsToMany(models.Meals, {
      through: 'MealIngredients'
    })
  }
  return Ingredients
}
