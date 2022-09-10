'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EAVPivotGroupAttribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EAVPivotGroupAttribute.init({
    attribute_group_id: DataTypes.SMALLINT,
    attribute_id: DataTypes.SMALLINT,
    sort_order: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'EAVPivotGroupAttribute',
    timestamps: false,
  });
  return EAVPivotGroupAttribute;
};