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

        productChange();
    });
}

function productChange() {
    inquirer
        .prompt([{
            name: "item",
            type: "input",
            message: "What is the id of the item you would like to purchase?"
        }, {
            name: "quantity",
            type: "input",
            message: "How many would you like?"
        }])
        .then(function(answer) {
            connection.query(
                'SELECT * FROM Products WHERE item_id=?', answer.item,
                function(err, res) {
                    if (err) throw err;
                    if (res[0].stock_quantity <= answer.quantity) {
                        console.log("We're sorry, there are only " + res[0].stock_quantity + " left in stock")
                        start();
                    } else {
                        var number = (res[0].stock_quantity - answer.quantity);
                        var cost = (res[0].price * answer.quantity);
                        connection.query('UPDATE Products SET stock_quantity=? WHERE item_id=?', [number, answer.item], function(err, results) {
                            if (err) throw err;
                            console.log(answer.quantity + " items purchased")
                            console.log(res[0].product_name + " " + res[0].price + "$")
                            console.log("Total Cost will be " + cost + "$")
                            console.log("Your transaction has been processed!")
                            start();
                        })

                    }
                }
            );
        });
}