'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EAVProductEntityAttributeValues', {
      eav_product_entity_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'EAVProductEntities'
          },
          key: 'id'
        }
      },
      eav_product_attribute_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'EAVProductAttributes'
          },
          key: 'id'
        }
      },
      attribute_value: {
        type: Sequelize.STRING
      }
    });
    await queryInterface.addIndex('EAVProductEntityAttributeValues', ['eav_product_entity_id', 'eav_product_attribute_id'], {
      indicesType: 'UNIQUE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EAVProductEntityAttributeValues');
  }
};