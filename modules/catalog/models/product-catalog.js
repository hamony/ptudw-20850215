'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCatalog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ProductDescription, { foreignKey: 'product_catalog_id', onDelete: 'cascade'});
    }
  }
  ProductCatalog.init({
    name: DataTypes.STRING,
    summary: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image_path: DataTypes.STRING,
    product_quantity: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProductCatalog',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return ProductCatalog;
};