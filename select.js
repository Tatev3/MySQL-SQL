const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE1
});

con.connect(function(err) {
    if (err) throw err;
    
    //con.query("SELECT * FROM users", function (err, result, fields) {
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        process.exit(0);
    });
});