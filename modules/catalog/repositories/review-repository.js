const { Review } = require('../models');
const { Customer } = require('../../customer/models');

class ReviewRepository {
    async getAllReviewsByProductId(product_id) {
        const reviews = await Review.findAll({
            attributes: ['id', 'message', 'rating', 'created_at', 'updated_at'],
            where: { product_id: product_id},
            include: [{ model: Customer }]
        });
        
        return reviews;
    }
    async getStarsByProductId(product_id) {
        const reviews = await Review.findAll({
            attributes: ['rating'],
            where: { product_id: product_id}
        });
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(reviews.filter(item => (item.rating == i)).length);
        }
        
        return stars;
    }
}

module.exports = new ReviewRepository();

