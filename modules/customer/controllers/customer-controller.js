const controller = {};
const CustomerRepository = require('../repositories/customer-repository');

controller.create = (customer) => {
    return CustomerRepository.create(customer);
};

controller.getCustomerByEmail = (email) => {
    return CustomerRepository.getCustomerByEmail(email);
};

controller.comparePassword = (password, comparePassword) => {
    return CustomerRepository.comparePassword(password, comparePassword);
};

controller.isLoggedIn = (req, res, next) => {
    if (req.ses) {
        
    }
};

module.exports = controller;