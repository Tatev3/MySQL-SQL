const mysql2 = require('mysql2');
require('dotenv').config();


const con = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

con.connect(function(err) {
    if (err) throw err;
    const sql = "SELECT ID, NAME FROM USERS UNION SELECT ID, NAME FROM CUSTOMERS";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        process.exit(0);
    });
});
