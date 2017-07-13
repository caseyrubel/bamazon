var mysql = require("mysql");
var inquirer = require("inquirer");
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
        .prompt({
            name: "product",
            type: "input",
            message: "What product would you like to buy?"
        })
        .then(function(answer) {
            if (answer.product.toUpperCase() === "SUNS JERSEY") {
                changeProduct(answer.product);
            } else if (answer.product.toUpperCase() === "RAPTORS JERSEY") {
                changeProduct(answer.product);
            } else if (answer.product.toUpperCase() === "WARRIORS JERSEY") {
                changeProduct(answer.product);
            } else if (answer.product.toUpperCase() === "LAKERS JERSEY") {
                changeProduct(answer.product);
            } else if (answer.product.toUpperCase() === "KINGS JERSEY") {
                changeProduct(answer.product);
            } else if (answer.product.toUpperCase() === "POST") {
                changeProduct(answer.product);
            }
        });
}

function changeProduct(par) {
    connection.query(
        "UPDATE products SET ? WHERE ?", [{
                stock_quantity: (stock_quantity - 1)
            },
            {
                product_name: par
            }
        ],
        function(err, res) {
            console.log(res.affectedRows + " products updated!\n");
        }
    );
}


function show() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
}