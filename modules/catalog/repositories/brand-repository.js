const { ProductBrand, ProductDescription, EAVProductValueVarchar } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
class Brand {
    async getAllBrands(query) {
        let options = {
            attributes: ['id', 'name'],
            order: [
                ['name', 'ASC']
            ],
            include: [{
                model: ProductDescription,
                attributes: ['id'],
                where: {
                    price: {
                        [Op.gte]: query.min_price,
                        [Op.lte]: query.max_price
                    }
                }
            }]
        };
        if (query.catalog){
            options.include[0].where.product_catalog_id = query.catalog;
        }
        if (query.color){
            options.include[0].include = [{
                model: EAVProductValueVarchar,
                attributes: [],
                where: {attribute_value: query.color}
            }];
        }
        if (query.search != '') {
            options.include[0].where.name = {
                [Op.iLike]: `%${query.search}%`
            };
        }
        const catalogs = await ProductBrand.findAll(options);
        return catalogs;
    }
}

module.exports = new Brand();

