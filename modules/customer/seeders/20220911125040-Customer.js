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
            "username": "pvan0@gmail.com",
            "password": "$2b$10$5trhRPt9NZSYfLJAptQwhO64aN43yzbFpduIL5WwKCWg3ekmHGK5G",
            "fullname": "Phil Van Arsdall",
            "avatar_path": "/img/product/review-1.png"
        }, {
            "username": "hryder1@gmail.com",
            "password": "$2b$10$5trhRPt9NZSYfLJAptQwhO64aN43yzbFpduIL5WwKCWg3ekmHGK5G",
            "fullname": "Harris Ryder",
            "avatar_path": "/img/product/review-2.png"
        }, {
            "username": "djamot2@gmail.com",
            "password": "$2b$10$5trhRPt9NZSYfLJAptQwhO64aN43yzbFpduIL5WwKCWg3ekmHGK5G",
            "fullname": "Danita Jamot",
            "avatar_path": "/img/product/review-3.png"
        }, {
            "username": "felcum3@gmail.com",
            "password": "$2b$10$5trhRPt9NZSYfLJAptQwhO64aN43yzbFpduIL5WwKCWg3ekmHGK5G",
            "fullname": "Fabiano Elcum",
            "avatar_path": "/img/product/review-1.png"
        }, {
            "username": "tcarruthers4@gmail.com",
            "password": "$2b$10$5trhRPt9NZSYfLJAptQwhO64aN43yzbFpduIL5WwKCWg3ekmHGK5G",
            "fullname": "Tresa Carruthers",
            "avatar_path": "/img/product/review-2.png"
        }, {
            "username": "ahucklesby5@gmail.com",
            "password": "$2b$10$5trhRPt9NZSYfLJAptQwhO64aN43yzbFpduIL5WwKCWg3ekmHGK5G",
            "fullname": "Annie Hucklesby",
            "avatar_path": "/img/product/review-3.png"
        }, {
            "username": "easty6@gmail.com",
            "password": "$2b$10$5trhRPt9NZSYfLJAptQwhO64aN43yzbFpduIL5WwKCWg3ekmHGK5G",
            "fullname": "Estella Asty",
            "avatar_path": "/img/product/review-1.png"
        }, {
            "username": "dhutton7@gmail.com",
            "password": "$2b$10$5trhRPt9NZSYfLJAptQwhO64aN43yzbFpduIL5WwKCWg3ekmHGK5G",
            "fullname": "Donna Hutton",
            "avatar_path": "/img/product/review-2.png"
        }, {
            "username": "kornillos8@gmail.com",
            "password": "$2b$10$5trhRPt9NZSYfLJAptQwhO64aN43yzbFpduIL5WwKCWg3ekmHGK5G",
            "fullname": "Katerina Ornillos",
            "avatar_path": "/img/product/review-3.png"
        }, {
            "username": "dmalam9@gmail.com",
            "password": "$2b$10$5trhRPt9NZSYfLJAptQwhO64aN43yzbFpduIL5WwKCWg3ekmHGK5G",
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
