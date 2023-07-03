const mysql2 = require('mysql2');
//require('dotenv').config();
const con = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    
    //const sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product INT(3))";
    const sql = "CREATE TABLE customers2 (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        process.exit(0);
    });
});
con.connect(function(err) {
    if (err) {
      console.error('Error connecting to the database: ', err);
      return;
    }
  
    const sql = "SELECT ID, NAME FROM USERS UNION SELECT ID, NAME FROM CUSTOMERS";
  
    con.query(sql, function (err, result) {
      if (err) {
        console.error('Error executing the query: ', err);
        return;
      }
  
      console.log(result);
      process.exit(0);
    });
});
