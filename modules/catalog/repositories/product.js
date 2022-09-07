const { ProductDescription, ProductCatalog } = require('../models');
class Product {
    async getTopProducts() {
        let data = await ProductDescription.findAll({
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
    async getAllProducts() {
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
    async getTrendingProducts() {
        return ProductDescription.findAll({
            order: [
                ['review_rating', 'DESC']
            ],
            limit: 8,
            include: [{model: ProductCatalog}],
            attributes: ['id', 'name', 'image_path', 'price']
        });
    }
}

module.exports = new Product();

