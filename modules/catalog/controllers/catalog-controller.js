const controller = {};
const CatalogRepository = require('../repositories/catalog-repository');

controller.getAllCatalogs = (query) => {
    return CatalogRepository.getAllCatalogs(query);
};

module.exports = controller;