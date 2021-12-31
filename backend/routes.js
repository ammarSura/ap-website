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

    console.log('/addUser', check);
    
});

app.post('/update/user-details', async (req, res) => {
  const record = req.body;

  const response = await User.findOneAndUpdate(
      {email: record.email}, 
      { first_name: record.first_name, last_name: record.last_name, gender: record.gender, birthday: record.birthday} );

  console.log('/update/user-details', response);

  res.json({ status: 'ok' });
  
});

app.get('/getUser/:term', async (req, res) => {
	const email = req.params.term;

  const records = await User.find({email: email});
	console.log('/getUser/:term', records);
	res.json(records);
});

app.post('/removeUser', async (req, res) => {
    const record = req.body;

    console.log('101010', record, '/removeUser');

    const response = await User.deleteOne({ record });

	console.log('/removeUser', response);

	res.json({ status: 'ok' });
});


// update User details

app.post('/update/email', async (req, res) => {
  const record = req.body;

  const response = await User.findOneAndUpdate(
      {_id: record._id}, 
      {email: record.email} );

  console.log('/update/email', response);

  res.json({ status: 'ok' });
});


app.post('/update/address', async (req, res) => {
    const record = req.body;
    console.log(record);

    const response = await User.findOneAndUpdate(
      {email: record.email},
      {$push: { addresses: {name: record.name, line1: record.line1, line2: record.line2, pincode: record.pincode, city: record.city, state: record.state, country: record.country}}}
    );

    console.log('/update/address', response);

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

  console.log('/update/details', response);

  res.json({status: 'ok'});
})

// routes for cart



app.get('/getCart/:term', async (req, res) => {
	const term = req.params.term;
  
  const check = await User.findOne({email: term}, 'cart');
	console.log('/getCart/:term', check);
	res.json(check);
});

app.post('/removeFromCart', async (req, res) => {
  const record = req.body;
  console.log('record: ', record)

  const response1 = await User.findOneAndUpdate(
    {email: record.email}, 
    {$pull: {cart: {product_id: record.product_id, size: record.size}}})

    console.log('/addToCart1', response1);

  
  res.json({ status: 'ok' });
});

// app.post('/updateCart', async (req, res) => {
//   const record = req.body;
//   console.log('record: ', record)

//   const response1 = await User.findOneAndUpdate({email: record.email}, 
//   {$pull: { cart: { product_id: record.product_id }}});

//   console.log('/updateCart', response1);

  

//   const response2 = await User.findOneAndUpdate( {email: record.email}, 
//   {$push: { cart: { product_id: record.product_id, size: record.size, quantity: record.quantity } } });
  
//   console.log('/updateCart', response2);
//   res.json({ status: 'ok' });

 
// })

// app.post('/addToCart', async (req, res) => {
//   const record = req.body;
//   console.log('record: ', record)

//   // const response1 = await User.findOneAndUpdate({email: record.email}, {$pull: {cart: {product_id: record.product_id, size: "XS"}}})

//   const response = await User.findOneAndUpdate( 
//     {email: record.email}, 
//     {$push: { cart: { product_id: record.product_id, size: record.size, cart_id: record.cart_id } } }
//     );
  
//   console.log('/addToCart', response);
//   res.json({ status: 'ok' });

 
// })

app.post('/addToCart', async (req, res) => {
  const record = req.body;
  console.log('record: ', record)

  const response1 = await User.findOneAndUpdate(
    {email: record.email}, 
    {$pull: {cart: {product_id: record.product_id, size: record.size}}})

    console.log('/addToCart1', response1);

  const response = await User.findOneAndUpdate( 
    {email: record.email}, 
    {$push: { cart: { product_id: record.product_id, size: record.size, quantity: record.quantity } } }
    );
  
  console.log('/addToCart', response);
  res.json({ status: 'ok' });

 
})

app.post('/addReview', async (req, res) => {
  const record = req.body;
  // console.log('record: ', record)

  

  const response2 = await Product.findOneAndUpdate( {id: record.id}, 
  {$push: { reviews: { name: record.name, reviewString: record.reviewString } } });
  
  console.log('/addReview', response2);
  res.json({ status: 'ok' });

 
})

// app.post('/removeFromCart', async (req, res) => {
//   const record = req.body;

//   console.log('/removeProduct');

//   const response = await User.findOneAndUpdate(
//       {_id: record._id}, 
//       {$pull: { cart: { product_id: record.product_id }}});

// console.log('/removeFromCart', response)

// res.json({ status: 'ok' });
// });

// app.get('/getCart', async (req, res) => {
//   const record = req.body;

//   const response = await User.findOne(
//       {_id: record._id});

//   console.log('/getCart', response);

//   res.json(respons.cart);
// });

// routes for wishlist

app.get('/getWishlist/:term', async (req, res) => {
	const term = req.params.term;
  // const thing = term.indexOf('_');
  // const email = term.slice( 0, thing);
  // const product_id = term.slice(thing + 1, )

  const check = await User.findOne({email: term}, 'wishlist');
	console.log('/getWishlist/:term', check);
	res.json(check);
});

app.post('/addToWishlist', async (req, res) => {
  const record = req.body;

  const response = await User.findOneAndUpdate(
      {email: record.email}, 
      {$push: { wishlist: {product_id: record.product_id}}});

  console.log('/addToWishlist', response);

  res.json({ status: 'ok' });
});

app.post('/removeFromWishlist', async (req, res) => {
  const record = req.body;

  

  const response = await User.findOneAndUpdate(
      {email: record.email}, 
      {$pull: { wishlist: { product_id: record.product_id }}});

console.log('/removeFromWishlist', response)

res.json({ status: 'ok' });
});

// app.get('/getWishlist/:term', async (req, res) => {
// 	const email = req.params.term;

//   const records = await User.find({email: email});
// 	console.log('Response => ', records);
// 	res.json(records);
// });


// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// routes for products

app.post('/addProduct', async (req, res) => {
    const record = req.body;

    const response = await Product.create(record);

    console.log('/addProduct', response);

    res.json({ status: 'ok' });
});

app.post('/removeProduct', async (req, res) => {
    const record = req.body;

    console.log(record, '/removeProduct');

    const response = await Product.deleteOne({ record });

	console.log('/removeProduct', response);

	res.json({ status: 'ok' });
});

app.get('/getProduct/:term', async (req, res) => {
	const id = req.params.term;

  const records = await Product.find({id: id});
	console.log('/getProduct/:term', records);
	res.json(records);
});

// Routes to change product details

app.post('/changePrice', async (req, res) => {
  const record = req.body;

  const response = await Product.findOneAndUpdate(
      {id: record.id}, 
      {price: record.age} );

  console.log('/changePrice', response);

  res.json({ status: 'ok' })
});


// Routes for search

function splitter(string) {
  // console.log(string.slice(1,3));
  var lst = [];
  
  for (let i = 0; i < string.length; i++) {
    // for(let j = i + 1; j < string.length; j++) { 
    //   if (j + 2 < string.length) {
    //     lst.push(string.slice(i, j));
    //   }
    // }

    if (i + 2 < string.length) {
      lst.push(string.slice(i, i + 2));
    }
  }

  return lst;
}

function gramer(string) {
  var x = string.split(' ');
  console.log(x);
  var lst = [];
  splitter(x);
  // for (let i = 0; i < x.length; i++) {
  //   console.log(x[i]);
    // for (let j = 0; j < x[i].length; j++) {

    // }
    
  // }

  return lst
}

app.get('/search/byterm/:term', async (req, res) => {
  
  const term = req.params.term;
  
  console.log(term);
  ngram = splitter(term);
  console.log('nram', ngram);

  var lst = [];
  for await (const doc of Product.find().cursor()) {
    for (let i = 0; i < ngram.length; i++ ) {
      if (doc.name.includes(ngram[i])) {
        lst.push(doc);
        break;
      }
    }
  }
  console.log('/search/byterm/:term', lst);
  res.json(lst);
});

// app.get('/search/byterm/:term', async (req, res) => {
//   const term = req.params.term;
//   console.log(term)
//   if (term === '') {
//     const records = Product.find({});
//     console.log('Response => ', records);
// 	res.json(records);

//   } else {
    
//     const records = await Product.find(
//     {$or: [{name: {$regex: term, $options: '<i>'}} , {category : {$regex: term, $options: '<i>'}}]}
//     );

//     console.log('Response => ', records);
//     res.json(records);
//   }
	
// });


// Search by gender

app.get('/search/gender/:term', async (req, res) => {
  
  const gender = req.params.term;console.log(gender)


  const records = await Product.find({gender: gender});
	console.log('/search/gender/:term', records);
	res.json(records);
    
  });

// // Search by category

app.get('/search/men/:category', async (req, res) => {
  // const gender = req.params.gender;
  const category = req.params.category

  const records = await Product.find({$and: [ {gender: {$regex: 'Men'}} , {$or: [{category : {$regex: category, $options: '<i>'} },{name: {$regex: category, $options: '<i>'} }] } ] });
  console.log('/search/men/:category', records);
	res.json(records);


});

app.get('/search/women/:category', async (req, res) => {
  // const gender = req.params.gender;
  const category = req.params.category

  const records = await Product.find({$and: [ {gender: {$regex: 'Women'}} , {$or: [{category : {$regex: category, $options: '<i>'} },{name: {$regex: category, $options: '<i>'} }] } ] });
  console.log('/search/women/:category', records);
	res.json(records);


});

// Server up

app.listen(PORT, '127.0.0.1', () => {
	console.log('Listening');
});