const { ProductCatalog, ProductDescription } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
class Catalog {
    async getAllCatalogs(query) {
        let options = {
            attributes: ['id', 'name', 'image_path', 'summary'],
            order: [
                ['name', 'ASC']
            ],
            include: [{
                model: ProductDescription,
                where: {}
            }],
            where: {}
        };

        if (query.search) {
            options.include[0].where.name = {
                [Op.iLike]: `%${query.search}%`
            };
        }

        const catalogs = await ProductCatalog.findAll(options);
        
        return catalogs;
    }
}

module.exports = new Catalog();

