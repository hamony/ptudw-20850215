const { ProductBrand, ProductDescription } = require('../models');
class Brand {
    async getAllBrands() {
        const catalogs = await ProductBrand.findAll({
            attributes: ['id', 'name'],
            order: [
                ['name', 'ASC']
            ],
            limit: 12,
            include: [{model: ProductDescription}]
        });
        
        return catalogs;
    }
}

module.exports = new Brand();

