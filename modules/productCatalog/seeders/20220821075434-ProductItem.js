'use strict';
const faker = require('@faker-js/faker');
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = [];
    Array.from({length: 100 }).forEach(() => {
      data.push({
        sku: faker.faker.phone.imei(),
        availability: true,
        product_description_id: faker.faker.mersenne.rand(35, 1)
      });
    });
    await queryInterface.bulkInsert('ProductItems', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductItems', null, {});
  }
};
