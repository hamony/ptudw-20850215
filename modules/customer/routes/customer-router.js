const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customer-controller');

router.get('/login', (req, res, next) => {
    try {
        req.session.returnUrl = req.query.returnUrl;
        res.render('login', { banner: 'Login/Register' });
    } catch (error) {
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let keepLoggedIn = (req.body.keepLoggedIn != undefined);
        const customer = await CustomerController.getCustomerByEmail(username);
        if (customer) {
            let correctPassword = await CustomerController.comparePassword(password, customer.password);
            if (correctPassword) {
                req.session.cookie.maxAge = keepLoggedIn ? 30 * 24 * 60 * 60 * 100 : null;
                req.session.customer = customer;
                if (req.session.returnUrl) {
                    return res.redirect(req.session.returnUrl);
                }
                return res.redirect('/');
            }
            return res.render('login', { 
                banner: 'Login/Register',
                message: 'Password is incorrect.',
                message_type: 'alert-danger'
            });
        } else {
            return res.render('login', { 
                banner: 'Login/Register',
                message: 'Email does not exist.',
                message_type: 'alert-danger'
            });
        }
    } catch (error) {
        next(error);
    }
});

router.get('/register', (req, res, next) => {
    try {
        res.render('register', { banner: 'Login/Register' });
    } catch (error) {
        next(error);
    }
});

router.post('/register', async (req, res, next) => {
    try {
        let customer = {
            fullname: req.body.fullname,
            username: req.body.username,
            password: req.body.password
        };
        let confirmPassword = req.body.confirmPassword;
        let keepLoggedIn = (req.body.keepLoggedIn != undefined);
        // kiem tra password and confirm password giong nhau
        if (customer.password != confirmPassword) {
            return res.render('register', {
                banner: 'Login/Register',
                message: 'Confirm password does not match!',
                message_type: 'alert-danger'
            });
        }
        // kiem tra username chua ton tai
        const existingCustomer = await CustomerController.getCustomerByEmail(customer.username);
        if (existingCustomer) {
            return res.render('register', {
                banner: 'Login/Register',
                message: `Email ${customer.username} exists! Please choose another email address.`,
                message_type: 'alert-danger'
            });
        }
        // tao tai khoan
        customer = await CustomerController.create(customer);
        if (keepLoggedIn) {
            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 100;
            req.session.customer = customer;
            return res.redirect('/');
        }
        
        return res.render('login', {
            banner: 'Login/Register',
            message: 'You have registered, now please login',
            message_type: 'alert-primary'
        });

    } catch (error) {
        next(error);
    }
});

router.get('/logout', (req, res, next) => {
    try {
        req.session.destroy();
        return res.redirect('/customers/login');
    } catch (error) {
        next(error);
    }
});


module.exports = router;