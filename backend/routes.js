// imports

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const PORT = 3080;


// connect to server

mongoose.connect('mongodb+srv://asura:asdfg@cluster0.udjat.mongodb.net/Database?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
() => {
  console.log("Users Database (MongoDB) is now connected to Port:", PORT);
});

app.use('/', express.static(path.resolve(__dirname)));

app.use(bodyParser.json());


//-----------------------------------------------------------------------------







// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// routes for users
app.post('/addUser', async (req, res) => {
    const record = req.body;
    const check = await User.find({email:record.email}).size();
    console.log(check.length);
    if (check.length==0) {
      const response = await User.create(record);
      console.log(response);

    res.json({ status: 'ok' });
    }
    
});

app.get('/getUser/:term', async (req, res) => {
	const email = req.params.term;

  const records = await User.find({email: email});
	console.log('Response => ', records);
	res.json(records);
});

app.post('/removeUser', async (req, res) => {
    const record = req.body;

    console.log('101010', record, '/removeUser');

    const response = await User.deleteOne({ record });

	console.log(response, '/removeUser repsonse');

	res.json({ status: 'ok' });
});


// update User details

app.post('/update/email', async (req, res) => {
  const record = req.body;

  const response = await User.findOneAndUpdate(
      {_id: record._id}, 
      {email: record.email} );

  console.log(response);

  res.json({ status: 'ok' });
});


app.post('/update/address', async (req, res) => {
    const record = req.body;

    const response = await User.findOneAndUpdate(
      {email: record.email},
      {$push: { addresses: {name: record.name, line1: record.line1, line2: record.line2, pincode: record.pincode, city: record.city, state: record.state, country: record.country}}}
    );

    console.log(response);

    res.json({status: 'ok'});
});

app.post('/update/details', async (req, res) => {
  const record = req.body;

  const response = await User.findOneAndUpdate(
    {email: record.email},
    {
      first_name: record.first_name,
      last_name: record.last_name,
      birthday: record.birthday,
      gender: record.gender,
    }
  
  );

  console.log(response);

  res.json({status: 'ok'});
})

// routes for cart

// app.post('/addToCart', async (req, res) => {
//   const record = req.body;

//   const response = await User.findOneAndUpdate(
//       {_id: record._id}, 
//       {$push: { cart: {product_id: record.product_id, quantity: record.quantity }}});
//       // db.Users1.find({email: "ammarsura@gmail.com"}, {orders: {_id: "16"}})
//   console.log(response);

//   res.json({ status: 'ok' });
// });

app.get('/getCart/:term', async (req, res) => {
	const term = req.params.term;
  // const thing = term.indexOf('_');
  // const email = term.slice( 0, thing);
  // const product_id = term.slice(thing + 1, )

  const check = await User.findOne({email: term}, 'cart');
	console.log('Response => ', check);
	res.json(check);
});

app.post('/addToCart', async (req, res) => {
  const record = req.body;

  const response = await User.findOneAndUpdate( {email: record.email}, 
  {$push: { cart: {product_id: record.product_id, quantity: record.quantity }}});
  
  console.log(response);
  res.json({ status: 'ok' });
});

app.post('/updateCart', async (req, res) => {
  const record = req.body;
  console.log('record: ', record)

  const response1 = await User.findOneAndUpdate({email: record.email}, 
  {$pull: { cart: { product_id: record.product_id }}});

  console.log(response1);

  const response2 = await User.findOneAndUpdate( {email: record.email}, 
  {$push: { cart: {product_id: record.product_id, quantity: record.quantity }}});
  
  console.log(response2);
  res.json({ status: 'ok' });
})
// app.post('/addToCart', async (req, res) => {
  
//   const record = req.body;
//   console.log(record);
  
//   const check = await User.findOne({email:record.email}, 'cart');
//   console.log('Chekc', check);
  
//   console.log(check.cart);

//   var inList = false;
//   for (let i = 0; i < check.cart.length; i++) {
//     if (check.cart[i].product_id === record.product_id) {
//       inList = true;
//       break;
//     }
//   }

//   if (inList) {
//     const response1 = await User.findOneAndUpdate({email: record.email}, 
//       {$pull: { cart: { product_id: record.product_id }}});
    
//         console.log(response1);
    
//     const response2 = await User.findOneAndUpdate( {email: record.email}, 
//       {$push: { cart: {product_id: record.product_id, quantity: record.quantity }}});
//       console.log(response2);
  // } //else {
  //   const response2 = await User.findOneAndUpdate( {email: record.email}, 
  //     {$push: { cart: {product_id: record.product_id, quantity: record.quantity }}});
  //     console.log(response2);
  // }

  // console.log(inList)
  // if (check.length==0) {
  // const response = await User.findOneAndUpdate(
  // {email: record.email}, 
  // {$push: { cart: {product_id: record.product_id, quantity: record.quantity }}});
  // console.log(response);

  // res.json({ status: 'ok' });
  
  // } else {
  //   const quant = check.quantity;
    
  //   const response1 = await User.findOneAndUpdate(
  //     {email: record.email}, 
  //     {$pull: { cart: { product_id: record.product_id }}});
  //   }
  //   console.log(response1);

  //   const response2 = await User.findOneAndUpdate(
  //     {email: record.email}, 
  //     {$push: { cart: {product_id: record.product_id, quantity: quant }}});
  //     console.log(response2);
  
// });

app.post('/removeFromCart', async (req, res) => {
  const record = req.body;

  console.log('/removeProduct');

  const response = await User.findOneAndUpdate(
      {_id: record._id}, 
      {$pull: { cart: { product_id: record.product_id }}});

console.log(response, 'item removed from cart')

res.json({ status: 'ok' });
});

app.get('/getCart', async (req, res) => {
  const record = req.body;

  const response = await User.findOne(
      {_id: record._id});

  console.log(response);

  res.json(respons.cart);
});

// routes for wishlist

app.post('/addToWishlist', async (req, res) => {
  const record = req.body;

  const response = await User.findOneAndUpdate(
      {email: record.email}, 
      {$push: { wishlist: {product_id: record.product_id}}});

  console.log(response);

  res.json({ status: 'ok' });
});

app.post('/removeFromWishlist', async (req, res) => {
  const record = req.body;

  console.log(record, '/removeProduct');

  const response = await User.findOneAndUpdate(
      {_id: record._id}, 
      {$pull: { wishlist: { product_id: record.product_id }}});

console.log(response, 'item removed from wishlist');

res.json({ status: 'ok' });
});

app.get('/getWishlist/:term', async (req, res) => {
	const email = req.params.term;

  const records = await User.find({email: email});
	console.log('Response => ', records);
	res.json(records);
});


// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// routes for products

app.post('/addProduct', async (req, res) => {
    const record = req.body;

    const response = await Product.create(record);

    console.log(response);

    res.json({ status: 'ok' });
});

app.post('/removeProduct', async (req, res) => {
    const record = req.body;

    console.log(record, '/removeProduct');

    const response = await Product.deleteOne({ record });

	console.log(response, 'removed Product');

	res.json({ status: 'ok' });
});

app.get('/getProduct/:term', async (req, res) => {
	const id = req.params.term;

  const records = await Product.find({_id: id});
	console.log('Response => ', records);
	res.json(records);
});

// Routes to change product details

app.post('/changePrice', async (req, res) => {
  const record = req.body;

  const response = await Product.findOneAndUpdate(
      {_id: record._id}, 
      {price: record.age} );

  console.log(response);

  res.json({ status: 'ok' })
});


// Routes for search





app.get('/search/byterm/:term', async (req, res) => {
  const term = req.params.term;
  if (term === '') {
    const records = Product.find({});
    console.log('Response => ', records);
	res.json(records);

  } else {
    const records = await Product.find(
    {$or: [{name: {$regex: term, $options: '<i>'}} , {category : {$regex: term, $options: '<i>'}}]}
    );

    console.log('Response => ', records);
    res.json(records);
  }
	
});


// Search by gender

app.get('/search/gender/:term', async (req, res) => {
  const gender = req.params.term;

  const records = await Product.find({gender: gender});
	console.log('Response => ', records);
	res.json(records);
    
  });

// // Search by category

app.get('/search/men/:category', async (req, res) => {
  // const gender = req.params.gender;
  const category = req.params.category

  const records = await Product.find({$and: [ {gender: {$regex: 'Men'}} , {$or: [{category : {$regex: category, $options: '<i>'} },{name: {$regex: category, $options: '<i>'} }] } ] });
  console.log('Response => ', records);
	res.json(records);


});

app.get('/search/women/:category', async (req, res) => {
  // const gender = req.params.gender;
  const category = req.params.category

  const records = await Product.find({$and: [ {gender: {$regex: 'Women'}} , {$or: [{category : {$regex: category, $options: '<i>'} },{name: {$regex: category, $options: '<i>'} }] } ] });
  console.log('Response => ', records);
	res.json(records);


});

// Server up

app.listen(PORT, '127.0.0.1', () => {
	console.log('Listening');
});
