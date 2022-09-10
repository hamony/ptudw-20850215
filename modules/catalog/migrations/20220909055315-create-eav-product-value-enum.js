'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EAVProductValuesEnum', {
      entity_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'ProductDescriptions'
          },
          key: 'id'
        }
      },
      attribute_id: {
        type: Sequelize.SMALLINT,
        references: {
          model: {
            tableName: 'EAVProductAttributes'
          },
          key: 'id'
        }
      },
      attribute_group_id: {
        type: Sequelize.SMALLINT,
        references: {
          model: {
            tableName: 'EAVAttributeGroups'
          },
          key: 'id'
        }
      },
      attribute_value: {
        type: Sequelize.ENUM('yes','no')
      }
    });
    await queryInterface.addIndex('EAVProductValuesEnum', ['attribute_group_id','entity_id', 'attribute_id'], {
      indicesType: 'UNIQUE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EAVProductValuesEnum');
  }
};