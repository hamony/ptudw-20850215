'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [{
            "username": "pvan0",
            "password": "yZSFZugO6a",
            "salt": "yZSFZugO6a",
            "fullname": "Phil Van Arsdall",
            "avatar_path": "/img/product/review-1.png"
        }, {
            "username": "hryder1",
            "password": "aELlfU9L",
            "salt": "aELlfU9L",
            "fullname": "Harris Ryder",
            "avatar_path": "/img/product/review-2.png"
        }, {
            "username": "djamot2",
            "password": "MeUI2pWk4k",
            "salt": "MeUI2pWk4k",
            "fullname": "Danita Jamot",
            "avatar_path": "/img/product/review-3.png"
        }, {
            "username": "felcum3",
            "password": "zD23XTCGD",
            "salt": "zD23XTCGD",
            "fullname": "Fabiano Elcum",
            "avatar_path": "/img/product/review-1.png"
        }, {
            "username": "tcarruthers4",
            "password": "1iux19ZHkB",
            "salt": "1iux19ZHkB",
            "fullname": "Tresa Carruthers",
            "avatar_path": "/img/product/review-2.png"
        }, {
            "username": "ahucklesby5",
            "password": "FzvDFDXlUFqg",
            "salt": "FzvDFDXlUFqg",
            "fullname": "Annie Hucklesby",
            "avatar_path": "/img/product/review-3.png"
        }, {
            "username": "easty6",
            "password": "lfe3mtOmvG",
            "salt": "lfe3mtOmvG",
            "fullname": "Estella Asty",
            "avatar_path": "/img/product/review-1.png"
        }, {
            "username": "dhutton7",
            "password": "pjdbSEt",
            "salt": "pjdbSEt",
            "fullname": "Donna Hutton",
            "avatar_path": "/img/product/review-2.png"
        }, {
            "username": "kornillos8",
            "password": "eXtwTLUi3",
            "salt": "eXtwTLUi3",
            "fullname": "Katerina Ornillos",
            "avatar_path": "/img/product/review-3.png"
        }, {
            "username": "dmalam9",
            "password": "DQC6yQ",
            "salt": "DQC6yQ",
            "fullname": "Derry Malam",
            "avatar_path": "/img/product/review-1.png"
        }];
        await queryInterface.bulkInsert('Customers', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Customers', null, {});
  }
};
