const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    // _id: { type: String, required: true},
    user_name: {type: String},
	first_name: { type: String },
    last_name: { type: String },
	date: {
		type: Number,
		default: Date.now
	},

    birthday: { type: String },
    gender: {type: String},
	email: {type: String},
    addresses: [
        {
            name: {type: String},
            line1: {type: String},
            line2: {type: String},
            city: {type: String},
            state: {type: String},
            country: {type: String},
            pincode: {type: String}
        }
    ],
    cart: [
        {
            product_id: {type: String},
            size: {type: String},
            quantity: {type: Number},
            price: {type: Number}
        }
    ],

    orders: [
        {
            product_id: {type: String},
            quantity: {type: String},
            size: {type: String},
            address: [],
            phone: {type: String},
            price: {type: Number},
            date: {
                type: Number,
                default: Date.now
            },
        }
    ],

    wishlist: [
        {
            product_id: {type: String},
        }
    ]
    


}, 
{ collection: 'Users2'}
)

const model = mongoose.model('UserModel', UserSchema)

module.exports = model
