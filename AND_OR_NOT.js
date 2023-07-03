const mysql2 = require('mysql2');
require('dotenv').config();

const con = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE1
});


const name = 'Industry Org';
const adr = 'Washington 45';
//const sql = `SELECT * FROM customers WHERE name = "${name}" AND address = "${adr}"`;
//const sql = `SELECT * FROM customers WHERE name = "${name}" OR address = "${adr}"`;
const sql = `SELECT * FROM customers WHERE NOT name = "${name}"`;
con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
    process.exit(0);
});


