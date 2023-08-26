const mysql = require("mysql");
const fs = require("fs");
const path = require('path');


var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'password',
    database: 'package_db',
    multipleStatements: true
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('db connection is success')
});

const sqlScript = fs.readFileSync(path.join(__dirname, '../sql/first_migration.sql')).toString();

pool.query(sqlScript, function (error, results, fields) {
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