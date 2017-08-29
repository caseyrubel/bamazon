var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var colors = require('colors/safe');
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "bamazon"
});
connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
        .prompt([{
            name: "item",
            type: "list",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }])
        .then(function(answer) {
            if (answer.item = "View Products for Sale") {
                connection.query('SELECT item_id, product_name, price From products', function(err, result) {
                    if (err) console.log(err);

                    var table = new Table({
                        head: ['Item Id#', 'Product Name', 'Price'],
                        style: {
                            head: ['red'],
                            compact: false,
                            colAligns: ['center']
                        }
                    })
                    for (var i = 0; i < result.length; i++) {
                        table.push(
                            [result[i].item_id, result[i].product_name, result[i].price]
                        );
                    }
                    console.log(table.toString());
                });
            } else if (answer.item = "View Low Inventory") {

            } else if (answer.item = "Add to Inventory") {

            } else if (answer.item = "Add New Product") {

            }
        })
}