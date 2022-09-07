const controller = {};
const Catalog = require('../repositories/catalog');

controller.getAllCatalogs = async () => {
    return Catalog.getAllCatalogs();
};

module.exports = controller;