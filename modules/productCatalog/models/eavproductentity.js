'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EAVProductEntity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EAVProductEntity.belongsToMany(models.EAVProductAttribute,{through: models.EAVProductEntityAttributeValue});
      EAVProductEntity.belongsToMany(models.ProductDescription, { through: models.ProductDescriptionEntity});
    }
  }
  EAVProductEntity.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'EAVProductEntity',
  });
  return EAVProductEntity;
};