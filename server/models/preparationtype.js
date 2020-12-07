'use strict'
module.exports = (sequelize, DataTypes) => {
  const PreparationType = sequelize.define(
    'PreparationType',
    {
      preparationType: DataTypes.STRING
    },
    {}
  )
  PreparationType.associate = function(models) {
    // associations can be defined here
  }
  return PreparationType
}
