const mysql = require("mysql");
const fs = require("fs");
const path = require('path');


var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    multipleStatements: true,
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
    pool.query(command, (err, results, fields) => {
        if (err) reject(err);
        resolve(results)
    })
})

const insert = (command, values) => new Promise((resolve, reject) => {
    pool.query(command, values, (err, results, fields) => {
        if (err) reject(err);
        resolve(results)
    })
})


module.exports = {
    query,
    insert
};