const { ProductCatalog, ProductDescription } = require('../models');
class Catalog {
    async getAllCatalogs() {
        const catalogs = await ProductCatalog.findAll({
            attributes: ['id', 'name', 'image_path', 'summary'],
            order: [
                ['name', 'ASC']
            ],
            limit: 12,
            include: [{model: ProductDescription}]
        });
        
        return catalogs;
    }
}

module.exports = new Catalog();

