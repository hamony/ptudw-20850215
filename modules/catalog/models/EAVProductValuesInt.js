'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EAVProductValueInt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EAVProductValueInt.init({
    entity_id: DataTypes.INTEGER,
    attribute_id: DataTypes.SMALLINT,
    attribute_value: DataTypes.INTEGER,
    attribute_group_id: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'EAVProductValueInt',
    tableName: 'EAVProductValuesInt',
    timestamps: false
  });
  return EAVProductValueInt;
};