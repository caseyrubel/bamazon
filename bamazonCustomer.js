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
// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
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
            // based on their answer, either call the bid or the post functions
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
                stock_quantity: 9;
            },
            {
                product_name: par;
            }
        ],
        function(err, res) {
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteCrud AFTER the UPDATE completes
            deleteCrud();
        }
    );
}