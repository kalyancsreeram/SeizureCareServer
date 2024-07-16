// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'seizurecare',
//     password: 't13'
// });

// module.exports = pool.promise();

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'seizurecaredb.cpoiwmyy88n8.us-east-2.rds.amazonaws.com',
    port: "3306",
    user: 'caretaker',
    password: 'AvengersInfinity13',
    database: 'seizurecaredb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();