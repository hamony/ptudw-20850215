const controller = {};
const ProductAttribute = require('../repositories/product-attribute-repository');

controller.getAttributes = (attribute_code, query) => {
    return ProductAttribute.getAttributes(attribute_code, query);
};

module.exports = controller;