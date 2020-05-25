const { Client, Pool } = require('pg');
const connectionString = require('../dbconnection');

const pool = new Pool(connectionString);

pool.connect();

pool.query('SELECT 1 + 1 AS solution', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to pg')
    }
})

module.exports = pool;


// {
//     user: 'mainuser',
//     password: 'Valeriatqm123',
//     database: 'tienda',
//     host: 'localhost',
//     port: '3005'
// }

// (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('conncetes')
//     }
// }