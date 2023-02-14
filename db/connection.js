const mysql = require('mysql2')
require('dotenv').config()


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'slackachu_db'
    },
    console.log('Connected to the database')
    )

module.exports = db