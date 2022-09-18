'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Customer, { foreignKey: 'customer_id' });
      this.belongsTo(models.ProductDescription, { foreignKey: 'product_id' });
      this.belongsTo(models.Comment, { foreignKey: 'parent_id' });
    }
  }
  SubComment.init({
    parent_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    customer_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SubComment',
    tableName: 'Comments',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return SubComment;
};