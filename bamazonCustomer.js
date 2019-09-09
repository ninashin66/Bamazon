var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "CrazyR!chasians12",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  displayProducts();
});

function displayProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (i = 0; i < res.length; i++) {
      console.log(
        "\n" + res[i].id + " " + res[i].product_name + " $" + res[i].price
      );
    }

    // connection.end();
  });
  buyProducts();
}

function buyProducts() {
  inquirer
    .prompt([
      {
        type: "number",
        message:
          "Which product would you like to buy? Please enter the item number.",
        name: "buy"
      },

      {
        type: "number",
        message: "How many would you like to buy? Please input a number.",
        name: "qty"
      }
    ])
    .then(function(inquirerResponse) {
      var id = inquirerResponse.buy;
      var qty = inquirerResponse.qty;

      var query = connection.query(
        "SELECT * FROM products WHERE id = ?",
        [id],
        function(err, res) {
          if (err) throw err;

          if (res.stock_quantity >= qty) {
            return updateProducts(qty, id);
          } else {
            console.log("Insufficient quantity!");
            return displayProducts();
          }
        }
      );
      //   connection.end();
    });
}

function updateProducts(qty, id) {
  console.log("Updating all Rocky Road quantities...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: stock_quantity - qty
      },
      {
        id: id
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.id + res.product_name + res.stock_quantity);
      displayProducts();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
  connection.end();
}
