'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EAVAttributeGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EAVAttributeGroup.init({
    attribute_group_name: DataTypes.STRING,
    attribute_group_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EAVAttributeGroup',
    timestamps: false,
  });
  return EAVAttributeGroup;
};