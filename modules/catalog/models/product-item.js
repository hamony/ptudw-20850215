'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ProductDescription);
    }
  }
  ProductItem.init({
    sku: DataTypes.STRING,
    availability: DataTypes.BOOLEAN,
    product_description_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductItem',
  });
  return ProductItem;
};