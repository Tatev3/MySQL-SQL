const mysql2 = require('mysql2');
require('dotenv').config();

const con = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});


con.connect(function(err) {
    if (err) {
      console.error('Error connecting to the database: ', err);
      return;
    }
  
    con.query("SHOW DATABASES", function (err, result) {
      if (err) {
        console.error('Error executing the query: ', err);
        return;
      }
  
      console.log(result);
      process.exit(0);
    });
  });