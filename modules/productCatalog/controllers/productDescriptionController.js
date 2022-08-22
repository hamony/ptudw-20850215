const controller = {};
const { ProductDescription, ProductCatalog } = require('../models');

controller.getTopProducts = async () => {
    try {
        let data = await ProductDescription.findAll({
            attributes: {exclude: ['ProductCatalogId', 'createdAt', 'updatedAt']},
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
    } catch (error) {
        console.log(error);
    }
};

controller.getAllProducts = () => {
    try {
        return ProductDescription.findAll({
            attributes: {exclude: ['ProductCatalogId', 'createdAt', 'updatedAt']},
            limit: 9,
            include: [
                { 
                    model: ProductCatalog,
                    attributes: { exclude: ['createdAt', 'updatedAt'] }
                }
            ]
        });   
    } catch (error) {
        console.log(error);
    }
};

module.exports = controller;