//mySQL homework
var mysql = require("mysql");
var prompt = require("prompt");

//  connection
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "Bamazon"
});

// Connecting to DB
connection.connect(function (err) {
	if (err) {
		console.log('Error connecting to Db');
		return;
	}
	console.log('Connection established');

	var schema = {
		properties: {
			ID: {
				message: "Enter the ID of product",
				pattern: /^[0-9][0-9]$|^[0-9]$/,
				required: true
			},
			howMany: {
				message: "How many?",
				pattern: /^[0-9][0-9]$|^[0-9][0-9][0-9]$/,
				required: true
			}
		}
	};

	var schema2 = {
		properties: {
			message: "Continue Shopping?",
			pattern: /(no|n|yes|y)/,
			required: true
		},
	}
};

var stopApp = function () {
	return next(err);
}
//startup function
var beginApp = function () {
	connection.query("SELECT * FROM Products", function (err, result) {
		if (err) throw err;
		return (getBamazonProducts(result));
	});
}

//display what is for sale in the table.
var getBamazonProducts = function (products) {
	console.log("Welcome to the Bamazon inventory! feel free to browse.");
	for (var i = 0; i < products.length; i++) {
		var pdoductsResults = "/r/n" +
			"ItemID: " + products[i].ItemID + "/r/n" +
			"Product Description: " + products[i].ProductName + "/r/n" +
			"Department: " + products[i].DepartmetName + "/r/n" +
			"Price: $ " + products[i].Price + "/r/n" +
			"Current Stock: " + products[i].StockQuantity;
		console.log(productsResults);
	}
	userSelectID();
}
//user selection. 
var userSelectID = function () {
	prompt.start();
	console.log("Enter id of product.");
	prompt.get(schema, function (err, result) {
		if (err) {
			console.log(err)
		}
		var userChoiceID = parseInt(result.ID);
		var userchoiceHowMany = parseInt(result.howMany);
		// might need to add more specific id, and quanity code/console.log here.

		//check inventory.
		var checkInventory = function () {
			connection.query('SELECT * FROM Products WHERE Item ID =' + userChoiceID, function (err, result) {
				if (err) throw err;
		var userWantsToBuy = UserChoiceHowMany;
		var productInventory = result[0].StockQuantity;
		var productsPrice = result[0].Price;
		var isInStock = productInventory - userWantsToBuy; 


			})
		}
	})
}
});