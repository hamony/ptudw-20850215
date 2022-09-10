'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductDescriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(150)
      },
      summary: {
        type: Sequelize.TEXT('tiny')
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.DOUBLE
      },
      availability: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      thumbnail_path: {
        type: Sequelize.STRING
      },
      image_path: {
        type: Sequelize.STRING
      },
      product_item_quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      review_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      review_rating: {
        type: Sequelize.DOUBLE,
        defaultValue: 0.0
      },
      product_catalog_id: {
        type: Sequelize.SMALLINT,
        references: {
          model: {
            tableName: 'ProductCatalogs'
          },
          key: 'id'
        }
      },
      product_brand_id: {
        type: Sequelize.SMALLINT,
        references: {
          model: {
            tableName: 'ProductBrands'
          },
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductDescriptions');
  }
};