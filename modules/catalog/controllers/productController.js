const controller = {};
const Product = require('../repositories/product');

controller.getTopProducts = async () => {
    return Product.getTopProducts();
};

controller.getAllProducts = () => {
    return Product.getAllProducts();
};

controller.getTrendingProducts = () => {
    return Product.getTrendingProducts();
};

module.exports = controller;