const { ProductCatalog } = require('../models');
class Catalog {
    async getAllCatalogs() {
        let catalogs = await ProductCatalog.findAll({
            attributes: ['id', 'name', 'image_path', 'summary'],
            limit: 12
        });
        
        return catalogs;
    }
}

module.exports = new Catalog();

