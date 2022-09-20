const { Review, ProductDescription, sequelize } = require('../models');
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
    getReviewByCustomerIdProductId(customer_id, product_id){
        return Review.findOne({
            where: {customer_id, product_id}
        });
    }
    async add(review){
        const t = await sequelize.transaction();
        try {
            let newReview;
            const existingReview =  await Review.findOne({
                where: {
                    customer_id: review.customer_id,
                    product_id: review.product_id
                }
            });
            if(existingReview){
                existingReview.set(review);
                newReview = await existingReview.save({transaction: t});
            } else {
                newReview = await Review.create(review,{transaction: t});
            }

            // Get product and it's reviews
            const existingProduct = await ProductDescription.findOne({
                where: {id: review.product_id},
                include: [{model: Review}]
            });
            let review_rating = 0;
            for (let i = 0; i < existingProduct.Reviews.length; i++) {
                review_rating += existingProduct.Reviews[i].rating;
            }
            review_rating = (review_rating / existingProduct.Reviews.length).toFixed(2);
            existingProduct.set({
                review_rating: review_rating,
                review_count: existingProduct.Reviews.length
            });
            await existingProduct.save({transaction: t});
            // Commit if no error
            await t.commit();

            return newReview;
        } catch (error) {
            await t.rollback();
        }
    }
}

module.exports = new ReviewRepository();

