'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Comments'
          },
          key: 'id'
        }
      },
      message: {
        type: Sequelize.TEXT
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Customers'
          },
          key: 'id'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'ProductDescriptions'
          },
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};