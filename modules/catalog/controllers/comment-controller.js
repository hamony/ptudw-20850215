const controller = {};
const CommentRepository = require('../repositories/comment-repository');

controller.getAllCommentsByProductId = (id) => {
    return CommentRepository.getAllCommentsByProductId(id);
};

controller.add = (comment) => {
    return CommentRepository.add(comment);
};

module.exports = controller;