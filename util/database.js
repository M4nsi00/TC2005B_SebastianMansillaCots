const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '172.20.98.47',
    port: '3306',
    user: 'mansi',
    database: 'users_login',
    password: '280904'
})

module.exports = pool.promise()