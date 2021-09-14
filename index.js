const express = require('express');
const exphbs  = require('express-handlebars');
// const session = require('express-session')
//require my factory function
const pizzaFactory = require('./pizzaCart');

const app = express();

var smallCostTotal = 0;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
// app.use(express.static('public'));

//create instance for pizza factory function
const PizzaInstance = pizzaFactory();

// add more middleware to allow for templating support

const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath:  './views',
    layoutsDir : './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

//make public folder visible
app.use(express.static('public'));

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// configure the session middleware
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

let counter = 0;
//add routes *GET* --home, *POST* --forms

app.get('/', function(req,res){
    res.render('index', {
        smallCost: PizzaInstance.getsmallCostTotal(),
        mediumCost: PizzaInstance.getMediumCostTotal(),
        largeCost: PizzaInstance.getlargeCostTotal(),
		counterSmall: PizzaInstance.getSmallCounter(),
		counterMedium: PizzaInstance.getMediumCounter(),
		counterLarge: PizzaInstance.getLargeCounter(),

		
        grandTotal: PizzaInstance.grandPizzaTotal(),
    });
});

//post route for user to add pizza
app.post('/buySmall', function(req, res){
	var costSmall = req.body.small;
    // console.log(costSmall)

	 PizzaInstance.buyingPizza(costSmall)
    


	res.redirect('/');

})

app.post('/buyMedium', function(req, res){
	var costMed = req.body.medium
    // console.log(costMed)

	 PizzaInstance.buyingPizza(costMed)

	res.redirect('/');

})

app.post('/buyLarge', function(req, res){
	var costLrg = req.body.large

	PizzaInstance.buyingPizza(costLrg)

	res.redirect('/')

})

//routes for 3 pizza sizes counter

app.post('/buySmall', function(req, res) {
	console.log(PizzaInstance.getSmallCounter())
	res.render('index', {
        counterSmall: PizzaInstance.getSmallCounter(),
    });
});


// app.post('/buyMedium', function(req, res) {
// 	res.render('index', {
//         counterMedium: PizzaInstance.getMediumCounter(),
//     });
// });

// app.post('/buyLarge', function(req, res) {
// 	res.render('index', {
//         counterLarge: PizzaInstance.getLargeCounter(),
//     });
// });

// // post route for user to place/send order
// app.get('/order', function(req, res){
// 	res.render('orders', {
//         counter: PizzaInstance.buyingPizza(),
//     });

// })



const PORT =  process.env.PORT || 3017;

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});