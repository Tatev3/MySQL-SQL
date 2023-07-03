const mysql2 = require('mysql2');


const con = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE1
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    /* Users table */
    // const sql = `INSERT INTO
    //                     customers (name, address)
    //                 VALUES
    //                     ('Company Inc', 'Highway 37'),
    //                     ('Industry Org', 'Washington 45'),
    //                     ('Garage Corp', 'Number 25'),
    //                     ('Garage Corp', 'Number 20'),
    //                     ('Garage Corp', 'Number 15'),
    //                     ('Garage Corp', 'Number 10'),
    //                     ('Garage Corp', 'Number 5')`;

    /* Customers table */
     const sql = `INSERT INTO
                         customers (name, address)
                    VALUES 
                    ('Company Inc', 'Highway 37'),
                    ('Industry Org', 'Washington 45'),
                    ('Garage Corp', 'Number 25'),
                    ('Garage Corp', 'Number 20'),
                    ('Garage Corp', 'Number 15'),
                    ('Garage Corp', 'Number 10'),
                    ('Garage Corp', 'Number 5')`;

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        process.exit(0);
    });
});