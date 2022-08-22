'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductDescriptionEntity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductDescriptionEntity.init({
    production_description_id: DataTypes.INTEGER,
    eav_product_entity_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductDescriptionEntity',
  });
  return ProductDescriptionEntity;
};