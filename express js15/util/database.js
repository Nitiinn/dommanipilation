const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'noe-complete',
    password:'Nitin9@6601'
});

module.exports = pool.promise();