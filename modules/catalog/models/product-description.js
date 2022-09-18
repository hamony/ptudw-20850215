'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductDescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ProductCatalog, {foreignKey: 'product_catalog_id'});
      this.hasMany(models.Comment, { foreignKey: 'product_id', onDelete: 'cascade' });
      this.hasMany(models.Review, { foreignKey: 'product_id', onDelete: 'cascade' });
      this.hasMany(models.EAVProductValueVarchar, {foreignKey: 'entity_id'});
    }
  }
  ProductDescription.init({
    name: DataTypes.STRING,
    summary: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.DOUBLE,
      validate: {
        isFloat: true,
        min: 0
      }
    },
    availability: DataTypes.BOOLEAN,
    thumbnail_path: DataTypes.STRING,
    image_path: DataTypes.STRING,
    product_item_quantity: DataTypes.INTEGER,
    review_count: DataTypes.INTEGER,
    review_rating: DataTypes.DOUBLE,
    product_catalog_id: DataTypes.SMALLINT,
    product_brand_id: DataTypes.SMALLINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProductDescription',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return ProductDescription;
};