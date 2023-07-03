const mysql2 = require('mysql2');
require('dotenv').config();
const con = mysql2.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,


});

con.connect(function(err) {
    if (err) throw err;

    con.query("CREATE DATABASE mydb1", function (err, result) {
        if (err) throw err;
        console.log("Database created");
        process.exit(0);
    });
});