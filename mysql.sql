CREATE DATABASE bamazon_db;

CREATE TABLE products
(
    id INT NOT NULL
    AUTO_INCREMENT,
product_name VARCHAR
    (100) NULL,
department_name VARCHAR
    (100) NULL,
price DECIMAL
    (10, 4) NULL,
stock_quantity INT
    (50) NULL,
PRIMARY KEY
    (id)
);

    ALTER TABLE products MODIFY COLUMN price decimal
    (10,2);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('socks', 'clothes', 5, 200);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('pizza', 'food', 10, 200);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('flowers', 'garden', 15, 50);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('lamp', 'home', 75, 50);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('necklace', 'jewelry', 100, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('dog toy', 'pet', 10, 300);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('dog food', 'pet', 30, 100);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('The Great Gatsby', 'book', 15, 500);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('iPad', 'Electronics', 1000, 50);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('shampoo', 'beauty', 10, 500);