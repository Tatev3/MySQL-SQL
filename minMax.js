const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});


//const sql = `SELECT MIN(favorite_product) FROM USERS`;
const sql = `SELECT MAX(favorite_product) FROM USERS`;
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    process.exit(0);
});


