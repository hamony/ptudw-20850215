const controller = {};
const Product = require('../repositories/product-repository');
const AttributeGroupRepository = require('../repositories/attribute-group-repository');

controller.getTopProducts = () => {
    return Product.getTopProducts();
};

controller.getAllProducts = (query) => {
    return Product.getAllProducts(query);
};

controller.getTrendingProducts = () => {
    return Product.getTrendingProducts();
};

controller.getById = (id) => {
    return Product.getById(id);
};

controller.getAttributesGroup = (attribute_group_name, id) => {
    return AttributeGroupRepository.getAttributesGroup(attribute_group_name, id);
};

module.exports = controller;