const controller = {};
const Product = require('../repositories/Product');
const AttributeGroup = require('../repositories/AttributeGroup');

controller.getTopProducts = () => {
    return Product.getTopProducts();
};

controller.getAllProducts = () => {
    return Product.getAllProducts();
};

controller.getTrendingProducts = () => {
    return Product.getTrendingProducts();
};

controller.getById = (id) => {
    return Product.getById(id);
};

controller.getAttributesGroup = (attribute_group_name, id) => {
    return AttributeGroup.getAttributesGroup(attribute_group_name, id);
};

module.exports = controller;