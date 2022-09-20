const controller = {};
const ReviewRepository = require('../repositories/review-repository');

controller.getAllReviewsByProductId = (id) => {
    return ReviewRepository.getAllReviewsByProductId(id);
};

controller.getAllStarsByProductId = (id) => {
    return ReviewRepository.getStarsByProductId(id);
};

controller.getReviewByCustomerIdProductId = (customer_id, product_id) => {
    return ReviewRepository.getReviewByCustomerIdProductId(customer_id, product_id);
};

controller.add = (review) => {
    return ReviewRepository.add(review);
};

module.exports = controller;