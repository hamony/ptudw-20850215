'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EAVProductEntityAttributeValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EAVProductEntityAttributeValue.init({
    eav_product_entity_id: DataTypes.INTEGER,
    eav_product_attribute_id: DataTypes.INTEGER,
    attribute_value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EAVProductEntityAttributeValue',
  });
  return EAVProductEntityAttributeValue;
};