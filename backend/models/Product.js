const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
	

	id: { type: String, required: true },
	name: { type: String, required: true },
	type: { type: String},
	description: { type: String },
	category: [{ type: String }],
	image: { type: String },
	price: { type: Number },
	rating: { type: Number},
	reviews: [
		{ 
			name: { type: String },
			reviewString: {type: String},
			rating: {type: Number},
	 	}
	],
	buyers: [{ type: String }],
	gender: {type: String},
	sizes: [ { type: String } ],
	quantity: {type: Number},
	wishedQuantity: {type: Number},


}, 
{ collection: 'Products1'}
)

const model = mongoose.model('ProductModel', ProductSchema)

module.exports = model


