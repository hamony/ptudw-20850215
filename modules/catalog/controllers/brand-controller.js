const controller = {};
const Brand = require('../repositories/brand');

controller.getAllBrands = () => {
    return Brand.getAllBrands();
};

module.exports = controller;