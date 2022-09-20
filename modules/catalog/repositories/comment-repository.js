const { Comment, SubComment } = require('../models');
const { Customer } = require('../../customer/models');

class CommentRepository {
    async getAllCommentsByProductId(product_id) {
        const comments = await Comment.findAll({
            attributes: ['id', 'message', 'created_at', 'updated_at'],
            where: { product_id: product_id, parent_id: null },
            include: [
                { model: Customer },
                {
                    model: SubComment,
                    attributes: ['id', 'message', 'created_at', 'updated_at'],
                    include: [{ model: Customer }]
                }
            ]
        });
        
        return comments;
    }
    add(comment){
        return Comment.create(comment);
    }
}

module.exports = new CommentRepository();

