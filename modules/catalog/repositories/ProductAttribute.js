const { EAVProductAttribute, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

class ProductAttribute {
    async getAttributes(attribute_code) {

        return await sequelize.query(
            `SELECT attribute_value, COUNT(pd.id) AS num_products
            FROM "EAVProductValuesVarchar" evv
            LEFT JOIN "ProductDescriptions" pd ON pd.id = evv.entity_id 
            INNER JOIN "EAVProductAttributes" ea ON ea.id = evv.attribute_id 
            WHERE ea."attribute_code" = :attribute_code
            GROUP BY attribute_value`,
            {
                replacements: { attribute_code: attribute_code},
                type: QueryTypes.SELECT
            }
        );
    }
    async create(entity) {
        entity = entity || {};
        return await EAVProductEntity.create(entity);
    }
    async show() {

    }
    async update() {

    }
    async destroy() {

    }
}

module.exports = new ProductAttribute();

