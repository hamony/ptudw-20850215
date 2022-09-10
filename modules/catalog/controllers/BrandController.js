const controller = {};
const Brand = require('../repositories/Brand');

controller.getAllBrands = () => {
    return Brand.getAllBrands();
};

module.exports = controller;