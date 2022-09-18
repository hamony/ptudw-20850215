const { ProductDescription, ProductCatalog, EAVProductValueVarchar } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
class Product {
    async getTopProducts() {
        const data = await ProductDescription.findAll({
            limit: 12,
            order: [
                ['review_rating', 'DESC']
            ]
        });
        let topProducts = [];
        while(data.length) {
            topProducts.push(data.splice(0,3));
        }
        return topProducts;
    }
    getAllProducts(query) {
        let options = {
            attributes: ['id', 'name', 'image_path', 'price'],
            where: {
                price: {
                    [Op.gte]: query.min_price,
                    [Op.lte]: query.max_price
                }
            },
            include: [
                { 
                    model: ProductCatalog
                }
            ]
        };
        if (query.catalog > 0){
            options.where.product_catalog_id = query.catalog;
        }
        if (query.brand > 0){
            options.where.product_brand_id = query.brand;
        }
        if (query.color) {
            options.include.push({
                model: EAVProductValueVarchar,
                attributes: [],
                where: { attribute_value: query.color}
            });
        }
        if (query.limit > 0) {
            options.limit = query.limit;
            options.offset = query.limit * (query.page - 1);
        }
        if (query.sort) {
            switch (query.sort) {
                case 'name':
                    options.order = [
                        ['name', 'ASC']
                    ];
                    break;
                case 'price':
                    options.order = [
                        ['price', 'ASC']
                    ];
                    break;
                case 'review_rating':
                    options.order = [
                        ['review_rating', 'DESC']
                    ];
                    break;
            
                default:
                    options.order = [
                        ['name', 'ASC']
                    ];
                    break;
            }
        }
        if (query.search != '') {
            options.where.name = {
                [Op.iLike]: `%${query.search}%`
            };
        }
        return ProductDescription.findAndCountAll(options);
    }
    getTrendingProducts() {
        return ProductDescription.findAll({
            order: [
                ['review_rating', 'DESC']
            ],
            limit: 8,
            include: [{model: ProductCatalog}],
            attributes: ['id', 'name', 'image_path', 'price']
        });
    }
    getById(id) {
        return ProductDescription.findOne({
            where: {id: id},
            include: [{model: ProductCatalog}],
        });
    }
}

module.exports = new Product();

