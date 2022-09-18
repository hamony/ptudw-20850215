'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Customer, { foreignKey: 'customer_id' });
      this.belongsTo(models.ProductDescription, { foreignKey: 'product_id' });
    }
  }
  Review.init({
    product_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    rating: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Review',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Review;
};