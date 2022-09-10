const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

class AttributeGroup {
    async getAttributesGroup(attribute_group_name, product_id) {

        let sqlQuery = `WITH tmp AS ((SELECT ea.id, ea.attribute_name, evv.attribute_value, ea.unit 
            FROM "ProductDescriptions" pd 
            LEFT JOIN "EAVProductValuesVarchar" evv ON pd.id = evv.entity_id 
            INNER JOIN "EAVProductAttributes" ea ON evv.attribute_id = ea.id 
            INNER JOIN "EAVAttributeGroups" eg ON evv.attribute_group_id = eg.id 
            WHERE eg.attribute_group_code = :attribute_group_name
            AND evv.entity_id = :product_id)
            UNION 
            (SELECT ea.id, ea.attribute_name, evi.attribute_value::VARCHAR, ea.unit
            FROM "ProductDescriptions" pd 
            LEFT JOIN "EAVProductValuesInt" evi ON pd.id = evi.entity_id 
            INNER JOIN "EAVProductAttributes" ea ON evi.attribute_id = ea.id 
            INNER JOIN "EAVAttributeGroups" eg ON evi.attribute_group_id = eg.id 
            WHERE eg.attribute_group_code = :attribute_group_name
            and evi.entity_id = :product_id)
            UNION 
            (SELECT ea.id, ea.attribute_name, eve.attribute_value::VARCHAR, ea.unit
            FROM "ProductDescriptions" pd 
            LEFT JOIN "EAVProductValuesEnum" eve ON pd.id = eve.entity_id 
            INNER JOIN "EAVProductAttributes" ea ON eve.attribute_id = ea.id 
            INNER JOIN "EAVAttributeGroups" eg ON eve.attribute_group_id = eg.id 
            WHERE eg.attribute_group_code = :attribute_group_name
            AND eve.entity_id = :product_id)
            )
            SELECT attribute_name, attribute_value, unit FROM tmp
            INNER JOIN "EAVPivotGroupAttributes" pga ON pga.attribute_id = tmp.id
            ORDER BY pga.sort_order `;
        return await sequelize.query(
            sqlQuery,
            {
                replacements: { attribute_group_name: attribute_group_name, product_id: product_id},
                type: QueryTypes.SELECT
            }
        );
    }
}

module.exports = new AttributeGroup();

