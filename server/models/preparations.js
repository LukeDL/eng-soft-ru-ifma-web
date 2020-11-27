'use strict'
module.exports = (sequelize, DataTypes) => {
  const Preparations = sequelize.define(
    'Preparations',
    {
      preparationName: DataTypes.STRING,
      user: DataTypes.INTEGER
    },
    {}
  )
  Preparations.associate = function(models) {
    // associations can be defined here

    this.belongsTo(models.User, {
      foreignKey: 'user',
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
