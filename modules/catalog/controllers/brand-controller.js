const controller = {};
const BrandRepository = require('../repositories/brand-repository');

controller.getAllBrands = (query) => {
    return BrandRepository.getAllBrands(query);
};

module.exports = controller;