const express = require('express');
const exphbs  = require('express-handlebars');
const session = require('express-session')
//require my factory function
const pizzaFactory = require('./pizzaCart');

const app = express();
const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

//create instance for pizza factory function
const PizzaInstance = pizzaFactory();

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// configure the session middleware
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

// let counter = 0;
//add routes *GET* --home, *POST* --forms
app.get('/', function(req, res) {
	res.render('index', {
		// counter
	});
});

//post route for user to add pizza
app.post('/buy', function(req, res){
	res.render('cart',{

	})

	// res.redirect('/');

})

//post route for user to place/send order
app.post('/order', function(req, res){

})

app.post('/count', function(req, res) {
	counter++;
	res.redirect('/')
});


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});