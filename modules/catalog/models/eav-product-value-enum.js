'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EAVProductValueEnum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EAVProductValueEnum.init({
    entity_id: DataTypes.INTEGER,
    attribute_id: DataTypes.SMALLINT,
    attribute_value: {
      type: DataTypes.ENUM,
      values: ['yes','no']
    },
    attribute_group_id: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'EAVProductValueEnum',
    tableName: 'EAVProductValuesEnum',
    timestamps: false
  });
  return EAVProductValueEnum;
};