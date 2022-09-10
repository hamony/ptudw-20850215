const controller = {};
const Catalog = require('../repositories/catalog');

controller.getAllCatalogs = () => {
    return Catalog.getAllCatalogs();
};

module.exports = controller;