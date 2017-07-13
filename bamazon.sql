DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

USE bamazon;


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Suns Jersey", "Sports", "50", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Raptors Jersey", "Sports", "50", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Warriors Jersey", "Sports", "50", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lakers Jersey", "Sports", "50", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kings Jersey", "Sports", "50", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tent", "Outdoors", "$200", "15");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hiking Boots", "Outdoors", "100", "5");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dell Laptop", "Electronics", "600", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook Air", "Electronics", "900", "100");



