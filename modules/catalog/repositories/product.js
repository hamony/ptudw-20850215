const { ProductDescription, ProductCatalog } = require('../models');
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
    getAllProducts() {
        return ProductDescription.findAll({
            limit: 9,
            include: [
                { 
                    model: ProductCatalog,
                    attributes: { exclude: ['createdAt', 'updatedAt'] }
                }
            ]
        });
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

