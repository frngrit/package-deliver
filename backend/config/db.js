const mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'password',
    database: 'package_db'
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('db connection is success')
});

const query = (command) => new Promise((resolve, reject) => {
    pool.query(command , (err, results, fields) => {
        if (err) reject(err);
        resolve(results)
    })
})


module.exports = query;