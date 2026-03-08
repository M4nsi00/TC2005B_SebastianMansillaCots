const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'users_login',
    password: ''
})

module.exports = pool.promise()