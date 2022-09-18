const controller = {};
const CommentRepository = require('../repositories/comment-repository');

controller.getAllCommentsByProductId = (id) => {
    return CommentRepository.getAllCommentsByProductId(id);
};

module.exports = controller;