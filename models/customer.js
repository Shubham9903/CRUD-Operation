const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    lastname: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    }, 
    phonenumber: {
        type: String,
        minlength: 10,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model('Customer', customerSchema);

const validateCustomer = (customer) => {
    const schema = {
        firstname: Joi.string().min(3).max(50).required(),
        lastname: Joi.string().min(3).max(50).required(),
        phonenumber: Joi.string().min(10).required(),
        email: Joi.string().required(),
        address: Joi.string().required()
    }

    return Joi.validate(customer, schema);
}


module.exports.Customer = Customer;
module.exports.validate = validateCustomer;