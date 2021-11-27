const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
	

	_id: { type: String, required: true },
	name: { type: String, required: true },
	description: { type: String },
	category: [{ type: String }],
	image: { type: String },
	price: { type: Number },
	rating: { type: Number },
	reviews: [
		{ 
			name: {type: String},
			reviewline: {type: String}
	 	}
	],
	buyers: [{ type: String }],
	gender: {type: String}


}, 
{ collection: 'Products'}
)

const model = mongoose.model('ProductModel', ProductSchema)

module.exports = model


