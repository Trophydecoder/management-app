const mysql = require('mysql');

// Create a connection
const conn = mysql.createConnection({
  host: 'localhost',
  port: 3307, 
  user: 'root',
  password: '', 
  database: 'admins',
});

console.log('admin Db connected')

module.exports = {
  database: conn
};
