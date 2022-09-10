'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EAVProductAttribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.EAVProductValueVarchar, {foreignKey: 'attribute_id', onDelete: 'cascade'});
      this.hasMany(models.EAVProductValueInt, {foreignKey: 'attribute_id', onDelete: 'cascade'});
      this.hasMany(models.EAVProductValueEnum, {foreignKey: 'attribute_id', onDelete: 'cascade'});
    }
  }
  EAVProductAttribute.init({
    attribute_name: DataTypes.STRING,
    attribute_code: DataTypes.STRING,
    description: DataTypes.TEXT,
    data_type: DataTypes.STRING,
    unit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EAVProductAttribute',
    timestamps: false,
  });
  return EAVProductAttribute;
};