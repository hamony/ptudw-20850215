const controller = {};
const ProductAttribute = require('../repositories/product-attribute');

controller.getAttributes = (attribute_code) => {
    return ProductAttribute.getAttributes(attribute_code);
};

module.exports = controller;