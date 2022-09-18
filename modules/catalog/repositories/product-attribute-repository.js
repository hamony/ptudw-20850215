const { EAVProductAttribute, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

class ProductAttribute {
    async getAttributes(attribute_code, query) {

        let sqlString = `SELECT attribute_value, COUNT(pd.id) AS num_products
        FROM "EAVProductValuesVarchar" evv
        INNER JOIN "ProductDescriptions" pd ON pd.id = evv.entity_id 
        INNER JOIN "EAVProductAttributes" ea ON ea.id = evv.attribute_id 
        WHERE ea."attribute_code" = :attribute_code 
        AND price >= :min_price AND price <= :max_price`;
        let additionalWhere = '';
        if (query.catalog){
            additionalWhere += ` AND pd.product_catalog_id=:catalog_id`;
        }
        if (query.color){
            additionalWhere += ` AND evv.attribute_value=:attribute_value`;
        }
        if (query.search != '') {
            additionalWhere += ` AND pd.name LIKE '%:search%'`;
        }
        let group = ` GROUP BY attribute_value`;
        sqlString += additionalWhere + group;
        return await sequelize.query(
            sqlString,
            {
                replacements: { attribute_code: attribute_code, 
                    catalog_id: query.catalog, attribute_value: query.color,
                min_price: query.min_price, max_price: query.max_price, search: query.search},
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

