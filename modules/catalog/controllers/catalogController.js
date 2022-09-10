const controller = {};
const Catalog = require('../repositories/Catalog');

controller.getAllCatalogs = () => {
    return Catalog.getAllCatalogs();
};

module.exports = controller;