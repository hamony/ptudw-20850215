'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EAVProductValueVarchar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ProductDescription, {foreignKey: 'eav_entity_id'});
    }
  }
  EAVProductValueVarchar.init({
    entity_id: DataTypes.INTEGER,
    attribute_id: DataTypes.INTEGER,
    attribute_value: DataTypes.STRING,
    attribute_group_id: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'EAVProductValueVarchar',
    tableName: 'EAVProductValuesVarchar',
    timestamps: false
  });
  return EAVProductValueVarchar;
};