const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '172.20.96.1',
    port: '3307',
    user: 'root',
    database: 'users_login',
    password: ''
})

module.exports = pool.promise()