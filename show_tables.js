const mysql2 = require('mysql2');
require('dotenv').config();

const con = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE1
});

con.connect(function(err) {
    if (err) throw err;
    const sql = "SHOW TABLES";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        process.exit(0);
    });
});