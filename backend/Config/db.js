const mysql = require('mysql');

// Create a connection
const conn = mysql.createConnection({
  host: 'localhost',
  port: 3307, 
  user: 'root',
  password: '', 
  database: 'players',
});

console.log('players db connected')

module.exports = {
  database: conn
};
