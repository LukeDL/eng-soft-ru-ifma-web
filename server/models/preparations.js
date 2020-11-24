'use strict'
module.exports = (sequelize, DataTypes) => {
  const Preparations = sequelize.define(
    'Preparations',
    {
      preparationName: DataTypes.STRING,
      nutritionistId: DataTypes.INTEGER
    },
    {}
  )
  Preparations.associate = function(models) {
    // associations can be defined here

    this.belongsTo(models.Nutritionists, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    })

    this.belongsToMany(models.Ingredients, {
      through: 'PreparationsIngredients'
    })

    this.belongsToMany(models.Meals, {
      through: 'MealsPreparations'
    })
  }
  return Preparations
}
