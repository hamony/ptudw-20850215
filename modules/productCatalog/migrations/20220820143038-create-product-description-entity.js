'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductDescriptionEntities', {
      production_description_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'ProductDescriptions'
          },
          key: 'id'
        }
      },
      eav_product_entity_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'EAVProductEntities'
          },
          key: 'id'
        }
      }
    });
    await queryInterface.addIndex('ProductDescriptionEntities', ['production_description_id', 'eav_product_entity_id'], {
      indicesType: 'UNIQUE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductDescriptionEntities');
  }
};