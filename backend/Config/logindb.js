const mysql = require('mysql');

// Create a connection
const conn = mysql.createConnection({
  host: 'localhost',
  port: 3307, 
  user: 'root',
  password: '', 
  database: 'login',
});

console.log('login db connected')

module.exports = {
  database: conn
};
