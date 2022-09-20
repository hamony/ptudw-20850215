const { Customer } = require('../../customer/models');
const bcrypt = require('bcrypt');

class CustomerRepository {
    async create(customer){
        const saltRounds = 10;
        const hash = await bcrypt.hash(customer.password, saltRounds);
        customer.password = hash;
        return Customer.create(customer);
    }
    getCustomerByEmail(email){
        return Customer.findOne({
            where: {username: email}
        });
    }
    comparePassword(password, comparePassword){
        return bcrypt.compare(password, comparePassword);
    }
}

module.exports = new CustomerRepository();