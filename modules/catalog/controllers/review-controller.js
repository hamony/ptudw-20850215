const controller = {};
const ReviewRepository = require('../repositories/review-repository');

controller.getAllReviewsByProductId = (id) => {
    return ReviewRepository.getAllReviewsByProductId(id);
};

controller.getAllStarsByProductId = (id) => {
    return ReviewRepository.getStarsByProductId(id);
};

module.exports = controller;